import React, { useMemo, useState, Suspense, useCallback, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
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

function App() {
  const [hoveredBook, setHoveredBook] = useState<BookData | null>(null);
  const [isPhysicsEnabled, setIsPhysicsEnabled] = useState(false);
  const [viewMode, setViewMode] = useState<'3d' | 'gallery' | 'yearly'>('3d');
  const loadedBookCount = useRef(0);
  const [allBooksLoaded, setAllBooksLoaded] = useState(false);

  const spacing = 0.22;
  const startY = isPhysicsEnabled ? 10 : 0;


  // Map the data structure to match BookData type
  const books = booksData[0].user_books
    .filter(bookData => bookData.user_book_reads.length > 0) // Filter out empty user_book_reads
    .map((bookData) => ({
      date_added: bookData.user_book_reads[0].finished_at,
      read_count: 1,
      updated_at: bookData.user_book_reads[0].finished_at,
      book: {
        user_added: false,
        title: bookData.user_book_reads[0].edition.title,
        pages: bookData.user_book_reads[0].edition.pages,
        images: [],
        image: bookData.user_book_reads[0].edition.book.cached_image || null,
        editions: bookData.user_book_reads[0].edition.book.editions,
        cached_contributors: bookData.user_book_reads[0].edition.cached_contributors
      }
    })) as BookData[];

  // Calculate total height of books in meters
  const totalHeightMeters = useMemo(() => {
    return books.reduce((total, bookData) => {
      const pageCount = getPageCount(bookData)
      const height = pageCount * 0.12 / 1000 // Convert mm to meters
      return total + height
    }, 0)
  }, [books])

  // Get current year from the first book's finished_at
  const year = useMemo(() => {
    if (books.length > 0) {
      return new Date(books[0].date_added).getFullYear()
    }
    return new Date().getFullYear()
  }, [books])

  // Reset loading state when books change or view mode switches away from 3D
  useEffect(() => {
    // This effect should run when the books array or view mode changes.
    if (viewMode === '3d') {
      // console.log("Reset effect triggered (3D view)."); // REMOVE LOG
      // Only truly reset if loading wasn't just completed.
      // Check if the counter equals the length. If so, loading finished, don't reset the state.
      if (loadedBookCount.current !== books.length || books.length === 0) {
        // console.log(`Resetting count (${loadedBookCount.current}) and loaded state (${allBooksLoaded}).`); // REMOVE LOG
        loadedBookCount.current = 0;
        // Set initial state based on whether there are books
        setAllBooksLoaded(books.length === 0);
      } else {
        // console.log("Reset effect: Skipping state reset as loading appears complete."); // REMOVE LOG
      }
    } else {
      // console.log("Reset effect triggered (Non-3D view). Setting loaded true."); // REMOVE LOG
      // If not in 3D view, consider books loaded immediately
      setAllBooksLoaded(true);
    }
    // Keep original dependencies for now, the check should handle spurious runs
  }, [books, viewMode]);

  // Callback for when a book finishes loading its textures
  const handleBookLoad = useCallback(() => {
    loadedBookCount.current += 1;
    // console.log(`Book loaded. Count: ${loadedBookCount.current} / ${books.length}`); // REMOVE LOG
    // Check if all books have loaded
    if (loadedBookCount.current === books.length) {
      // console.log("Condition met: Setting allBooksLoaded to true"); // REMOVE LOG
      setAllBooksLoaded(true);
      // console.log("All book textures loaded, resuming physics."); // REMOVE LOG
    }
  }, [books.length]); // Dependency on books.length

  // Effect to automatically enable physics once loading is complete in 3D view
  useEffect(() => {
    if (viewMode === '3d' && allBooksLoaded) {
      // console.log("Loading complete, automatically enabling physics."); // REMOVE LOG
      setIsPhysicsEnabled(true);
    }
    // Intentionally not resetting isPhysicsEnabled here when switching views,
    // the static/dynamic rendering logic handles the visual state.
    // If we did reset, the physics might re-trigger unexpectedly.
  }, [allBooksLoaded, viewMode]);

  // Log state changes for debugging
  // useEffect(() => {
  //   console.log("allBooksLoaded state changed:", allBooksLoaded);
  // }, [allBooksLoaded]);

  // Pre-calculate Y positions for static layout
  const staticYPositions = useMemo(() => {
    let cumulativeHeight = 0;
    return books.map(bookData => {
      const pageCount = getPageCount(bookData);
      const depth = calculateBookDepth(pageCount);
      const yPos = cumulativeHeight + depth / 2;
      cumulativeHeight += depth;
      return yPos;
    });
  }, [books]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#FFF', position: 'relative' }}>
      <LoadingOverlay isLoading={viewMode === '3d' && !isPhysicsEnabled} />

      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}>
        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value as '3d' | 'gallery' | 'yearly')}
          style={{
            padding: '4px 8px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            marginRight: '12px'
          }}
        >
          <option value="3d">Single Pile</option>
          <option value="yearly">Yearly Piles</option>
          <option value="gallery">Gallery</option>
        </select>
        {(viewMode === '3d' || viewMode === 'yearly') && (
          <label style={{ cursor: 'pointer', userSelect: 'none' }}>
            <input
              type="checkbox"
              checked={isPhysicsEnabled}
              onChange={(e) => setIsPhysicsEnabled(e.target.checked)}
              style={{ marginRight: '8px' }}
            />
            Physics Enabled
          </label>
        )}
      </div>

      {viewMode === '3d' ? (
        <Canvas shadows camera={{ position: [5, 2, 5], fov: 50 }}>
          <color attach="background" args={['#4F46E5']} />
          <Physics /* key={allBooksLoaded ? 'loaded' : 'loading'} */ gravity={[0, -9.81, 0]} paused={!allBooksLoaded}>
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
              {/* Map all books directly */}
              {books.map((bookData, index) => {
                const randomX = isPhysicsEnabled ? (Math.random() - 0.1) * 0.01 : 0;
                const randomZ = isPhysicsEnabled ? (Math.random() - 0.1) * 0.01 : 0;

                // Calculate Y position based on physics state
                const yPosition = isPhysicsEnabled
                  ? startY + index * spacing // Original physics drop start Y
                  : staticYPositions[index]; // Static position

                return (
                  <Book
                    key={bookData.book.title}
                    position={[randomX, yPosition, randomZ]}
                    data={bookData}
                    onHover={(isHovered) => setHoveredBook(isHovered ? bookData : null)}
                    isPhysicsEnabled={isPhysicsEnabled}
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
          <fog attach="fog" args={['#4F46E5', 30, 100]} />
        </Canvas>
      ) : viewMode === 'yearly' ? (
        <YearlyBookPiles books={books} />
      ) : (
        <BookGallery books={books} />
      )}

      {viewMode === '3d' && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#1F2937',
          padding: '32px',
          borderRadius: '24px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
          fontFamily: 'Inter, system-ui, sans-serif',
          textAlign: 'center',
          color: '#fff',
          maxWidth: '90%',
          width: 'auto',
          minWidth: '300px',
          height: '140px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          zIndex: 1000
        }}>
          <div style={{ width: '100%' }}>
            {hoveredBook ? (
              <>
                <h3 style={{
                  margin: '0 0 6px 0',
                  fontSize: '1.4em',
                  color: '#fff',
                  lineHeight: '1.3',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 400,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {hoveredBook.book.title}
                </h3>
                <p style={{
                  margin: '0 0 4px 0',
                  fontSize: '1.1em',
                  lineHeight: '1.4',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#E5E7EB',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  by {hoveredBook.book.cached_contributors
                    .filter(c => !c.contribution || c.contribution === 'Author')
                    .map(c => c.author.name)
                    .join(', ')}
                </p>
                <p style={{
                  margin: '0',
                  fontSize: '1em',
                  color: '#D1D5DB',
                  lineHeight: '1.4',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                  {getPageCount(hoveredBook)} pages
                </p>
                {hoveredBook.book.cached_contributors.some(c => c.contribution && c.contribution !== 'Author') && (
                  <p style={{
                    margin: '4px 0 0 0',
                    fontSize: '0.9em',
                    color: '#D1D5DB',
                    lineHeight: '1.4',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {hoveredBook.book.cached_contributors
                      .filter(c => c.contribution && c.contribution !== 'Author')
                      .map(c => `${c.author.name} (${c.contribution})`)
                      .join(', ')}
                  </p>
                )}
              </>
            ) : (
              <p style={{
                margin: 0,
                fontSize: '1.1em',
                lineHeight: 1.6
              }}>
                In {year} you read<br />
                <strong style={{ fontSize: '1.4em', color: '#fff' }}>{totalHeightMeters.toFixed(2)} metres</strong> of books<br />
                that's the same height as <strong style={{ color: '#fff' }}>{getComparison(totalHeightMeters)}</strong>
              </p>
            )}
          </div>
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
