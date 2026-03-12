import { useMemo, useState, Suspense, useCallback, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import './App.css'
import { getComparison } from './utils/heightComparisons'
import { Book, BookData } from './Book'
import { getPageCount } from './utils/bookUtils'
import { calculateBookDepth } from './utils/bookDimensions'
import { Ground } from './components/Ground'
import { BookGallery } from './components/BookGallery'
import { YearlyBookPiles } from './components/YearlyBookPiles'
import { booksData } from './BookData'
import LoadingOverlay from './components/LoadingOverlay'
import { ModernBookCard } from './components/ModernBookCard'
import { config } from './config'
import { fetchUserBooks } from './utils/api'


function App() {
  const [hoveredBook, setHoveredBook] = useState<BookData | null>(null);
  const [pinnedBook, setPinnedBook] = useState<BookData | null>(null);
  const [physicsStarted, setPhysicsStarted] = useState(false); // internal sequence: true when textures are ready and warmup finished
  const [userPhysicsEnabled, setUserPhysicsEnabled] = useState(true); // user toggle preference

  const [viewMode, setViewMode] = useState<'3d' | 'gallery' | 'yearly'>('3d');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const loadedBookCount = useRef(0);
  const hasDroppedOnce = useRef(false); // tracks whether the first drop has happened
  const [allBooksLoaded, setAllBooksLoaded] = useState(false);
  const [dynamicBooksData, setDynamicBooksData] = useState<any>(booksData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch dynamic data if username is in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    if (username) {
      setIsLoading(true);
      fetchUserBooks(username)
        .then(data => {
          setDynamicBooksData(data);
          setIsLoading(false);
        })
        .catch(err => {
          console.error('Error fetching dynamic books:', err);
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, []);

  const spacing = 0.22;
  const startY = 10; // books always drop from height when physicsStarted

  // Preload ALL cover images immediately on mount so they're in the browser cache
  // before Three.js useTexture() calls them. This is the biggest win for first-load lag.
  useEffect(() => {
    const dataToUse = dynamicBooksData?.user_books || booksData.user_books;
    dataToUse.forEach((bookData: any) => {
      const url = bookData.book?.cached_image?.url;
      if (url) {
        const img = new Image();
        img.src = config.getProxiedImageUrl(url);
      }
    });
  }, [dynamicBooksData]); // re-run if dynamic data changes

  // Map the data structure to match BookData type (memoized so hover state changes don't retrigger physics)
  const books = useMemo(() => {
    const sourceBooks = dynamicBooksData?.user_books || booksData.user_books;
    return sourceBooks
      .filter((bookData: any) => bookData.user_book_reads && bookData.user_book_reads.length > 0)
      .map((bookData: any) => ({
        date_added: bookData.user_book_reads[0].finished_at,
        read_count: 1,
        updated_at: bookData.user_book_reads[0].finished_at,
        rating: bookData.user_book_reads[0].user_book?.rating || null,
        book: {
          user_added: false,
          id: bookData.book.id,
          title: bookData.book.title,
          pages: bookData.book.pages || null,
          images: [],
          image: bookData.book.cached_image || null,
          cached_contributors: bookData.book.cached_contributors
        }
      })) as BookData[];
  }, [dynamicBooksData]); // Re-map if dynamic data changes

  // Compute available years
  const availableYears = useMemo(() => {
    const years = new Set<number>();
    books.forEach(book => years.add(new Date(book.date_added).getFullYear()));
    return Array.from(years).sort((a, b) => b - a);
  }, [books]);

  // Set initial selected year if null
  useEffect(() => {
    if (selectedYear === null && availableYears.length > 0) {
      setTimeout(() => setSelectedYear(availableYears[0]), 0);
    }
  }, [availableYears, selectedYear]);

  // Filter books for the selected year (for 3d view); 0 = All Time
  const singleYearBooks = useMemo(() => {
    if (selectedYear === null) return [];
    if (selectedYear === 0) return books;
    return books.filter(book => new Date(book.date_added).getFullYear() === selectedYear);
  }, [books, selectedYear]);

  // Calculate total height of books in meters
  const totalHeightMeters = useMemo(() => {
    return singleYearBooks.reduce((total, bookData) => {
      const pageCount = getPageCount(bookData)
      const height = pageCount * 0.12 / 1000 // Convert mm to meters
      return total + height
    }, 0)
  }, [singleYearBooks])

  // Reset loading state on book set / view mode changes
  useEffect(() => {
    if (viewMode === '3d') {
      loadedBookCount.current = 0;
      // ONLY reset physicsStarted on the very first load to avoid year-change flickers
      if (!hasDroppedOnce.current) {
        setPhysicsStarted(false);
      }
      setTimeout(() => setAllBooksLoaded(singleYearBooks.length === 0), 0);
    } else {
      setTimeout(() => setAllBooksLoaded(true), 0);
    }
  }, [singleYearBooks, viewMode]);

  // Callback for when a book finishes loading its textures
  const handleBookLoad = useCallback(() => {
    loadedBookCount.current += 1;
    if (loadedBookCount.current === singleYearBooks.length) {
      setAllBooksLoaded(true);
    }
  }, [singleYearBooks.length]);

  // Start the drop sequence after shaders have compiled on the static render.
  // We only need the warmup frames on the FIRST ever drop — shaders are already
  // compiled for year changes, so those start immediately (no flicker).
  useEffect(() => {
    if (viewMode === '3d' && allBooksLoaded && !physicsStarted) {
      if (hasDroppedOnce.current) {
        // Shaders already compiled — start immediately
        setPhysicsStarted(true);
      } else {
        // First drop: wait for shader compilation across a few frames
        let raf1: number, raf2: number, raf3: number, raf4: number, raf5: number;
        raf1 = requestAnimationFrame(() => {
          raf2 = requestAnimationFrame(() => {
            raf3 = requestAnimationFrame(() => {
              raf4 = requestAnimationFrame(() => {
                raf5 = requestAnimationFrame(() => {
                  hasDroppedOnce.current = true;
                  setPhysicsStarted(true);
                });
              });
            });
          });
        });
        return () => {
          cancelAnimationFrame(raf1);
          cancelAnimationFrame(raf2);
          cancelAnimationFrame(raf3);
          cancelAnimationFrame(raf4);
          cancelAnimationFrame(raf5);
        };
      }
    }
  }, [allBooksLoaded, viewMode]);


  // Log state changes for debugging
  // useEffect(() => {
  //   console.log("allBooksLoaded state changed:", allBooksLoaded);
  // }, [allBooksLoaded]);

  // Pre-calculate Y positions for static layout
  const staticYPositions = useMemo(() => {
    return singleYearBooks.reduce((acc, bookData) => {
      const pageCount = getPageCount(bookData);
      const depth = calculateBookDepth(pageCount);
      const prevTotal = acc.length > 0 ? acc[acc.length - 1].total : 0;
      acc.push({ yPos: prevTotal + depth / 2, total: prevTotal + depth });
      return acc;
    }, [] as { yPos: number, total: number }[]).map(r => r.yPos);
  }, [singleYearBooks]);

  return (
    <div style={{ width: '100%', height: '100dvh', background: '#FFF', position: 'relative', overflow: 'hidden' }}>
      {/* The loader only cares about the internal sequence (textures + warmup) */}
      <LoadingOverlay isLoading={(viewMode === '3d' && (!allBooksLoaded || (!hasDroppedOnce.current && !physicsStarted))) || isLoading} />


      {error && (
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#FEE2E2',
          color: '#991B1B',
          padding: '12px 24px',
          borderRadius: '12px',
          zIndex: 10001,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '1px solid #FECACA'
        }}>
          Error: {error}
        </div>
      )}

      <div style={{
        position: 'absolute',
        top: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        padding: '16px 28px',
        borderRadius: '24px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        fontFamily: '"Inter", system-ui, sans-serif',
        minWidth: '550px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <select
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value as '3d' | 'gallery' | 'yearly')}
            style={{
              padding: '8px 16px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              background: '#fff',
              color: '#374151',
              fontWeight: 500,
              fontSize: '0.95rem',
              cursor: 'pointer',
              outline: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}
          >
            <option value="3d">Single Pile</option>
            <option value="yearly">Yearly Piles</option>
            <option value="gallery">Gallery</option>
          </select>
          {viewMode === '3d' && availableYears.length > 0 && (
            <select
              value={selectedYear || ''}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              style={{
                padding: '8px 16px',
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                background: '#fff',
                color: '#374151',
                fontWeight: 500,
                fontSize: '0.95rem',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}
            >
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
              <option value={0}>All Time</option>
            </select>
          )}
          {(viewMode === '3d' || viewMode === 'yearly') && (
            <label style={{ cursor: 'pointer', userSelect: 'none', display: 'flex', alignItems: 'center', gap: '8px', color: '#4B5563', fontWeight: 500, fontSize: '0.95rem' }}>
              <input
                type="checkbox"
                checked={userPhysicsEnabled}
                onChange={(e) => setUserPhysicsEnabled(e.target.checked)}

                style={{ width: '18px', height: '18px', accentColor: '#4F46E5', cursor: 'pointer' }}
              />
              Physics
            </label>
          )}
        </div>

        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ margin: '0 0 2px 0', fontSize: '0.85rem', color: '#6B7280', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {selectedYear === 0 ? 'All time you read' : `In ${selectedYear} you read`}
          </p>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827', lineHeight: '1.1' }}>
            {totalHeightMeters.toFixed(2)} metres
          </div>
          <p style={{ margin: '2px 0 0 0', fontSize: '0.85rem', color: '#4B5563', fontWeight: 500 }}>
            ≈ {getComparison(totalHeightMeters)}
          </p>
        </div>
      </div>

      {viewMode === '3d' ? (
        <Canvas shadows camera={{ position: [5, 2, 5], fov: 50 }}>
          <color attach="background" args={['#4F46E5']} />
          <Physics
            key={`physics-${singleYearBooks.length}`}
            gravity={[0, -9.81, 0]}
            paused={!physicsStarted || !allBooksLoaded || !userPhysicsEnabled}

            timeStep="vary"
            interpolate={false}
            numSolverIterations={4}
          >
            <ambientLight intensity={0.8} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={1.2}
              castShadow
              shadow-mapSize={[1024, 1024]}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <directionalLight
              position={[-5, 1, 3]}
              intensity={0.8}
              color="#FFF8E7"
            />

            <directionalLight
              position={[-3, 3, 5]}
              intensity={0.5}
              color="#FFF8E7"
            />

            <spotLight
              position={[3, 6, 0]}
              angle={0.4}
              penumbra={0.5}
              intensity={0.8}
              castShadow
              shadow-mapSize={[1024, 1024]}
              target-position={[0, 2, 0]}
            />
            <directionalLight
              position={[2, 4, -5]}
              intensity={0.3}
              color="#87CEEB"
            />

            <directionalLight
              position={[-2, 4, -5]}
              intensity={0.3}
              color="#EEC2EB"
              castShadow
              shadow-mapSize={[512, 512]}
            />

            {/* Spotlight specifically for book spines */}
            <spotLight
              position={[-2, 3, 2]}
              angle={0.3}
              penumbra={0.2}
              intensity={1.5}
              distance={8}
              castShadow
              shadow-mapSize={[1024, 1024]}
              target-position={[0, 1.5, 0]}
            />

            <Ground />

            <Suspense fallback={null}>
              {singleYearBooks.map((bookData, index) => {
                // Calculate effective physics state
                const isEffectivePhysics = physicsStarted && userPhysicsEnabled;

                // On the first load, position books at their drop heights while waiting for warmup
                // This prevents a massive layout jump when physics finally kicks in
                const waitAtDropHeight = !hasDroppedOnce.current && allBooksLoaded && !physicsStarted;

                const randomX = (isEffectivePhysics || waitAtDropHeight) ? (Math.sin(index * 12.34) - 0.1) * 0.01 : 0;
                const randomZ = (isEffectivePhysics || waitAtDropHeight) ? (Math.cos(index * 56.78) - 0.1) * 0.01 : 0;

                // Calculate Y position based on effective physics or warmup wait state
                const yPosition = (isEffectivePhysics || waitAtDropHeight)
                  ? startY + index * spacing
                  : staticYPositions[index];

                return (
                  <Book
                    key={bookData.book.title}
                    index={index}
                    position={[randomX, yPosition, randomZ]}
                    data={bookData}
                    onHover={(isHovered) => {
                      if (isHovered) {
                        setHoveredBook(bookData);
                      } else if (hoveredBook?.book.title === bookData.book.title) {
                        setHoveredBook(null);
                      }
                    }}
                    onClick={() => {
                      if (pinnedBook === bookData) setPinnedBook(null);
                      else {
                        setPinnedBook(bookData);
                        setHoveredBook(null);
                      }
                    }}
                    isPhysicsEnabled={isEffectivePhysics}

                    onLoad={handleBookLoad}
                  />
                )
              })}
            </Suspense>
          </Physics>

          <OrbitControls
            target={[0, 2, 0]}
            maxPolarAngle={Math.PI / 2.1}
            minDistance={3}
            maxDistance={20}
          />
          <Preload all />
          <fog attach="fog" args={['#4F46E5', 30, 100]} />
        </Canvas>
      ) : viewMode === 'yearly' ? (
        <YearlyBookPiles books={books} isPhysicsEnabled={physicsStarted && userPhysicsEnabled} />

      ) : (
        <BookGallery books={books} />
      )}

      {viewMode === '3d' && (pinnedBook || hoveredBook) && (
        <div style={{
          position: 'absolute',
          top: '80px', // Further down, accounting for navbar
          right: '24px', // Space from right edge
          zIndex: 1000
        }}>
          <ModernBookCard
            bookData={(hoveredBook || pinnedBook)!}
            isTooltip={true}
            isPinned={!!pinnedBook && (!hoveredBook || hoveredBook.book.title === pinnedBook.book.title)}
            onClose={() => setPinnedBook(null)}
          />
        </div>
      )}
    </div>
  )
}

export default App

// query MyQuery {
//   me {
//     user_books(where: {read_count: {_gt: 0}, last_read_date: {}}) {
//       date_added
//       read_count
//       updated_at
//       book {
//         user_added
//         title
//         image {
//           url
//           color
//           height
//           width
//         }
//         pages
//         cached_contributors
//         editions(where: {pages: {_is_null: false, _gt: 0}}, limit: 1) {
//           pages
//         }
//       }
//     }
//   }
// }


// query MyQuery {
//   me {
//     user_books {
//       user_book_reads {
//         finished_at
//         edition {
//           title
//           pages
//           cached_contributors
//           book {
//             id
//             editions(where: {pages: {_is_null: false, _gt: 0}}, limit: 1) {
//               pages
//               id
//             }
//             cached_image
//           }
//         }
//       }
//     }
//   }
// }
