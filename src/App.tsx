import { useMemo, useState, Suspense, useCallback, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
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
import { TopOverlay } from './components/TopOverlay'
import { BottomControls } from './components/BottomControls'
import { CameraManager, CameraManagerHandle } from './components/CameraManager'
import { PersonReference } from './components/PersonReference'

const getComplementaryColor = (hex: string) => {
  const map: Record<string, string> = {
    '#4F46E5': '#F2D379', // warm yellow
    '#F6BDCC': '#8DE8B1', // mint green
    '#094229': '#FCAECA', // pink
  };
  return map[hex.toUpperCase()] || map[hex] || '#ffffff';
};

function App() {
  const [hoveredBook, setHoveredBook] = useState<BookData | null>(null);
  const [pinnedBook, setPinnedBook] = useState<BookData | null>(null);
  const [physicsStarted, setPhysicsStarted] = useState(false);
  const [userPhysicsEnabled, setUserPhysicsEnabled] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#4F46E5');
  const [showPerson, setShowPerson] = useState(false);

  const [viewMode] = useState<'3d' | 'gallery' | 'yearly'>('3d');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const loadedBookCount = useRef(0);
  const hasDroppedOnce = useRef(false);
  const [allBooksLoaded, setAllBooksLoaded] = useState(false);
  const [dynamicBooksData, setDynamicBooksData] = useState<any>(booksData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cameraManagerRef = useRef<CameraManagerHandle>(null);

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


  useEffect(() => {
    const dataToUse = dynamicBooksData?.user_books || booksData.user_books;
    dataToUse.forEach((bookData: any) => {
      const url = bookData.book?.cached_image?.url;
      if (url) {
        const img = new Image();
        img.src = config.getProxiedImageUrl(url);
      }
    });
  }, [dynamicBooksData]);

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
  }, [dynamicBooksData]);

  const availableYears = useMemo(() => {
    const years = new Set<number>();
    books.forEach(book => years.add(new Date(book.date_added).getFullYear()));
    return Array.from(years).sort((a, b) => b - a);
  }, [books]);

  useEffect(() => {
    if (selectedYear === null && availableYears.length > 0) {
      setTimeout(() => setSelectedYear(availableYears[0]), 0);
    }
  }, [availableYears, selectedYear]);

  const singleYearBooks = useMemo(() => {
    if (selectedYear === null) return [];
    if (selectedYear === 0) return books;
    return books.filter(book => {
      const year = new Date(book.date_added).getFullYear();
      if (selectedYear === 2023) {
        return year === 2023 || year === 2022;
      }
      return year === selectedYear;
    });
  }, [books, selectedYear]);

  const totalHeightMeters = useMemo(() => {
    return singleYearBooks.reduce((total, bookData) => {
      const pageCount = getPageCount(bookData)
      const height = pageCount * 0.12 / 1000
      return total + height
    }, 0)
  }, [singleYearBooks])

  const spacing = 0.22;
  const startY = Math.max((totalHeightMeters * 2) + 5, 10);

  useEffect(() => {
    if (viewMode === '3d') {
      loadedBookCount.current = 0;
      if (!hasDroppedOnce.current) {
        setPhysicsStarted(false);
      }
      setTimeout(() => setAllBooksLoaded(singleYearBooks.length === 0), 0);
    } else {
      setTimeout(() => setAllBooksLoaded(true), 0);
    }
  }, [singleYearBooks, viewMode]);


  const handleBookLoad = useCallback(() => {
    loadedBookCount.current += 1;
    if (loadedBookCount.current === singleYearBooks.length) {
      setAllBooksLoaded(true);
    }
  }, [singleYearBooks.length]);

  useEffect(() => {
    if (viewMode === '3d' && allBooksLoaded && !physicsStarted) {
      if (hasDroppedOnce.current) {
        setPhysicsStarted(true);
      } else {
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

  const staticYPositions = useMemo(() => {
    return singleYearBooks.reduce((acc, bookData) => {
      const pageCount = getPageCount(bookData);
      const depth = calculateBookDepth(pageCount);
      const prevTotal = acc.length > 0 ? acc[acc.length - 1].total : 0;
      acc.push({ yPos: prevTotal + depth / 2, total: prevTotal + depth });
      return acc;
    }, [] as { yPos: number, total: number }[]).map(r => r.yPos);
  }, [singleYearBooks]);

  useEffect(() => {
    if (viewMode === '3d' && allBooksLoaded && cameraManagerRef.current) {
      // Small delay to ensure controls are ready
      const timer = setTimeout(() => {
        // Cap the starting position between 0.5m and 1.5m equivalent
        const cappedHeight = Math.max(0.5, Math.min(totalHeightMeters, 1.5));
        cameraManagerRef.current?.snapToCentroid(cappedHeight);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [allBooksLoaded, viewMode, totalHeightMeters]);

  const handleCenterCamera = () => {
    if (cameraManagerRef.current) {
      const cappedHeight = Math.max(0.5, Math.min(totalHeightMeters, 1.5));
      cameraManagerRef.current.snapToCentroid(cappedHeight);
    }
  };

  const handleInstagramSnap = async () => {
    if (!cameraManagerRef.current) return;

    // For the actual snap/screenshot, we use the real height
    await cameraManagerRef.current.snapToCentroid(totalHeightMeters);

    // 2. Wait a bit for camera to settle (if we added lerp, but for now it's instant)
    await new Promise(resolve => setTimeout(resolve, 100));

    // 3. Take screenshot
    const dataUrl = await cameraManagerRef.current.takeScreenshot({
      year: selectedYear || 'All Time',
      height: `${totalHeightMeters.toFixed(2)}m`,
      comparison: getComparison(totalHeightMeters)
    });

    if (!dataUrl) return;

    // 4. Share or download
    try {
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'book-stack.png', { type: 'image/png' });

      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'My Book Stack',
          text: `I read ${totalHeightMeters.toFixed(2)}m of books this year!`,
        });
      } else {
        // Fallback to download
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `book-stack-${selectedYear || 'all-time'}.png`;
        link.click();
      }
    } catch (err) {
      console.error('Error sharing:', err);
      // Fallback to download
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `book-stack-${selectedYear || 'all-time'}.png`;
      link.click();
    }
  };

  return (
    <div style={{ width: '100%', height: '100dvh', background: backgroundColor, position: 'relative', overflow: 'hidden', color: '#000' }}>
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

      <TopOverlay
        selectedYear={selectedYear}
        totalHeightMeters={totalHeightMeters}
      />

      <BottomControls
        viewMode={viewMode}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        availableYears={availableYears}
        userPhysicsEnabled={userPhysicsEnabled}
        setUserPhysicsEnabled={setUserPhysicsEnabled}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        onInstagramSnap={handleInstagramSnap}
        onCenterCamera={handleCenterCamera}
        showPerson={showPerson}
        setShowPerson={setShowPerson}
      />

      {viewMode === '3d' ? (
        <Canvas shadows camera={{ position: [5, 2, 5], fov: 50 }}>
          <color attach="background" args={[backgroundColor]} />
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

            {/* Front lighting */}
            <directionalLight
              position={[-8, 10, 8]}
              intensity={0.5}
              castShadow
              shadow-mapSize={[1024, 1024]}
              color={getComplementaryColor(backgroundColor)}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />

            <Ground color={backgroundColor} />

            {showPerson && <PersonReference position={[-3.2, 0, 0]} height={13} />}

            <Suspense fallback={null}>
              {singleYearBooks.map((bookData, index) => {
                const isEffectivePhysics = physicsStarted && userPhysicsEnabled;
                const waitAtDropHeight = !hasDroppedOnce.current && allBooksLoaded && !physicsStarted;
                const randomX = (isEffectivePhysics || waitAtDropHeight) ? (Math.sin(index * 12.34) - 0.1) * 0.01 : 0;
                const randomZ = (isEffectivePhysics || waitAtDropHeight) ? (Math.cos(index * 56.78) - 0.1) * 0.01 : 0;
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

          <CameraManager ref={cameraManagerRef} target={[0, 2, 0]} />

          <Preload all />
          <fog attach="fog" args={[backgroundColor, 20, 300]} />
        </Canvas>
      ) : viewMode === 'yearly' ? (
        <YearlyBookPiles books={books} isPhysicsEnabled={physicsStarted && userPhysicsEnabled} />
      ) : (
        <BookGallery books={books} />
      )}

      {viewMode === '3d' && (pinnedBook || hoveredBook) && (
        <div style={{
          position: 'absolute',
          top: window.innerWidth < 768 ? 'auto' : '120px',
          bottom: window.innerWidth < 768 ? '160px' : 'auto',
          right: window.innerWidth < 768 ? '50%' : '24px',
          transform: window.innerWidth < 768 ? 'translateX(50%)' : 'none',
          zIndex: 1000,
          width: window.innerWidth < 768 ? '90%' : 'auto',
          maxWidth: window.innerWidth < 768 ? '350px' : 'none'
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
