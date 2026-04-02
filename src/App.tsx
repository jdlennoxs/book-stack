import { useMemo, useState, Suspense, useCallback, useEffect, useRef, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, OrthographicCamera } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import './App.css'
import { getComparison } from './utils/heightComparisons'
import { Book, BookData } from './Book'
import { getPageCount } from './utils/bookUtils'
import { calculateBookDepth } from './utils/bookDimensions'
import { Ground } from './components/Ground'
import LoadingOverlay from './components/LoadingOverlay'
import { config } from './config'
import { fetchUserBooks } from './utils/api'
import { TopOverlay } from './components/TopOverlay'
import { BottomControls } from './components/BottomControls'
import { CameraManager, CameraManagerHandle } from './components/CameraManager'
import { ShareModal } from './components/ShareModal'

const BookGallery = lazy(() => import('./components/BookGallery').then(m => ({ default: m.BookGallery })));
const YearlyBookPiles = lazy(() => import('./components/YearlyBookPiles').then(m => ({ default: m.YearlyBookPiles })));
const ModernBookCard = lazy(() => import('./components/ModernBookCard').then(m => ({ default: m.ModernBookCard })));
const PersonReference = lazy(() => import('./components/PersonReference').then(m => ({ default: m.PersonReference })));

const getComplementaryColor = (hex: string) => {
  const map: Record<string, string> = {
    '#4F46E5': '#F2D379', // warm yellow
    '#F6BDCC': '#8DE8B1', // mint green
    '#094229': '#FCAECA', // pink
    '#E1AD01': '#4F46E5', // mustard yellow -> indigo
  };
  return map[hex.toUpperCase()] || map[hex] || '#ffffff';
};

function App() {
  const [hoveredBook, setHoveredBook] = useState<BookData | null>(null);
  const [pinnedBook, setPinnedBook] = useState<BookData | null>(null);
  const [physicsStarted, setPhysicsStarted] = useState(false);
  const [userPhysicsEnabled, setUserPhysicsEnabled] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const testPhysics = params.get('testPhysics');
    if (testPhysics === 'false') return false;
    return true;
  });
  const [backgroundColor, setBackgroundColor] = useState('#E1AD01');
  const [showPerson, setShowPerson] = useState(false);
  const [viewAngle, setViewAngle] = useState<'flat' | 'isometric'>('flat');

  const [viewMode] = useState<'3d' | 'gallery' | 'yearly'>('3d');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [useFeetAndInches, setUseFeetAndInches] = useState(false);
  const [excludeAudiobooks, setExcludeAudiobooks] = useState(false);
  const loadedBookCount = useRef(0);
  const hasDroppedOnce = useRef(false);
  const [allBooksLoaded, setAllBooksLoaded] = useState(false);
  const [dynamicBooksData, setDynamicBooksData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const [lastBlob, setLastBlob] = useState<Blob | null>(null);
  const cameraManagerRef = useRef<CameraManagerHandle>(null);

  const [username, setUsername] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('username') || '';
  });

  const handleBookHover = useCallback((isHovered: boolean, bookData: BookData) => {
    if (!username) return;
    if (isHovered) {
      setHoveredBook(bookData);
    } else {
      setHoveredBook((prev) => (prev === bookData ? null : prev));
    }
  }, [username]);

  const handleBookClick = useCallback((bookData: BookData) => {
    if (!username) return;
    setPinnedBook((prev) => (prev === bookData ? null : bookData));
    setHoveredBook(null);
  }, [username]);

  // Fetch dynamic data if username changed
  useEffect(() => {
    const fetchName = username || 'jdlennoxs';

    // If it's the default user and we haven't loaded fallback data yet, do it dynamically
    if (!username && !dynamicBooksData) {
      setIsLoading(true);
      import('./BookData').then(m => {
        setDynamicBooksData(m.booksData);
        setIsLoading(false);
      }).catch(err => {
        console.error('Error loading fallback books:', err);
        setError('Failed to load initial data');
        setIsLoading(false);
      });
      return;
    }

    if (username) {
      setIsLoading(true);
      fetchUserBooks(fetchName)
        .then(data => {
          setDynamicBooksData(data);
          const url = new URL(window.location.href);
          url.searchParams.set('username', username);
          window.history.pushState({}, '', url);
          setIsLoading(false);
        })
        .catch(err => {
          console.error('Error fetching dynamic books:', err);
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [username]);


  useEffect(() => {
    const dataToUse = dynamicBooksData?.user_books;
    if (!dataToUse) return;
    dataToUse.forEach((bookData: any) => {
      const url = bookData.book?.cached_image?.url;
      if (url) {
        const img = new Image();
        img.src = config.getProxiedImageUrl(url);
      }
    });
  }, [dynamicBooksData]);

  const books = useMemo(() => {
    if (!dynamicBooksData) return [];
    const sourceBooks = dynamicBooksData.user_books;
    if (!sourceBooks) return [];

    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 4; // Last 5 years including current

    return sourceBooks
      .flatMap((bookData: any) => {
        if (!bookData.user_book_reads || bookData.user_book_reads.length === 0) return [];

        return bookData.user_book_reads.map((read: any) => ({
          date_added: read.finished_at,
          read_count: 1,
          updated_at: read.finished_at,
          rating: read.user_book?.rating || null,
          reading_format: read.user_book?.edition?.reading_format?.format || null,
          book: {
            user_added: false,
            id: bookData.book.id,
            title: bookData.book.title,
            pages: bookData.book.pages || null,
            images: [],
            image: bookData.book.cached_image || null,
            cached_contributors: bookData.book.cached_contributors
          }
        }));
      })
      .filter((book: any) => {
        const year = new Date(book.date_added).getFullYear();
        return year >= minYear;
      })
      .sort((a: any, b: any) => new Date(a.date_added).getTime() - new Date(b.date_added).getTime()) as BookData[];
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
    // Hidden test override for visual tests 
    const params = new URLSearchParams(window.location.search);
    const testHeight = params.get('testHeight');

    let filteredBooks = books;
    if (selectedYear !== null) {
      filteredBooks = books.filter(book => new Date(book.date_added).getFullYear() === selectedYear);
    }

    if (excludeAudiobooks) {
      filteredBooks = filteredBooks.filter(book => book.reading_format !== 'Listened');
    }

    if (testHeight) {
      // Mock some books to reach the target height roughly
      // We duplicate the available books to reach the target height if necessary
      // We use ALL available books as the source to ensure testHeight works even if 
      // the currently selected year is empty.
      const targetUnits = parseFloat(testHeight) / 0.15;
      let currentUnits = 0;
      const mocked: BookData[] = [];

      const sourcePool = books.length > 0 ? books : filteredBooks;

      if (sourcePool.length > 0) {
        while (currentUnits < targetUnits && mocked.length < 500) { // Safety cap
          const b = sourcePool[mocked.length % sourcePool.length];
          mocked.push(b);
          currentUnits += calculateBookDepth(getPageCount(b));
        }
      }
      return mocked;
    }

    return filteredBooks;
  }, [books, selectedYear, excludeAudiobooks]);

  // Handle test view angle override
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const angle = params.get('testAngle') as 'flat' | 'isometric';
    if (angle) setViewAngle(angle);
  }, []);

  const totalHeightMeters = useMemo(() => {
    return singleYearBooks.reduce((total, bookData) => {
      const pageCount = getPageCount(bookData)
      const height = pageCount * 0.12 / 1000
      return total + height
    }, 0)
  }, [singleYearBooks])

  const totalPhysicsHeight = useMemo(() => {
    return singleYearBooks.reduce((total, bookData) => {
      return total + calculateBookDepth(getPageCount(bookData));
    }, 0);
  }, [singleYearBooks]);


  const dropYPositions = useMemo(() => {
    const startY = 10;
    return singleYearBooks.reduce((acc, bookData) => {
      const pageCount = getPageCount(bookData);
      const depth = calculateBookDepth(pageCount);
      const prevTotal = acc.length > 0 ? acc[acc.length - 1].total : startY;
      acc.push({ yPos: prevTotal + depth / 2, total: prevTotal + depth + 0.12 });
      return acc;
    }, [] as { yPos: number, total: number }[]).map(r => r.yPos);
  }, [singleYearBooks]);

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

  // Fix for mobile keyboard "white bar" issue
  useEffect(() => {
    const handleFocusOut = () => {
      // Small delay to let the keyboard start dismissing
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    };
    window.addEventListener('focusout', handleFocusOut);
    return () => window.removeEventListener('focusout', handleFocusOut);
  }, []);

  useEffect(() => {
    if (viewMode === '3d' && allBooksLoaded && cameraManagerRef.current) {
      // Small delay to ensure controls are ready
      const timer = setTimeout(() => {
        cameraManagerRef.current?.snapToCentroid(totalPhysicsHeight, viewAngle, false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [allBooksLoaded, viewMode, totalPhysicsHeight, viewAngle]);

  const handleCenterCamera = (angle: 'flat' | 'isometric') => {
    setViewAngle(angle);
    if (cameraManagerRef.current) {
      setTimeout(() => {
        cameraManagerRef.current?.snapToCentroid(totalPhysicsHeight, angle, false);
      }, 50); // Small delay to let canvas internal cameras swap
    }
  };

  const handleNativeShare = async () => {
    if (!cameraManagerRef.current || isSharing) return;

    try {
      setIsSharing(true);
      // 1. Snapshot preparation
      cameraManagerRef.current.snapToCentroid(totalPhysicsHeight, viewAngle, true);

      // 2. Take screenshot as Blob
      const blob = cameraManagerRef.current.takeScreenshot({
        year: selectedYear || 'All Time',
        height: `${totalHeightMeters.toFixed(2)}m`,
        comparison: getComparison(totalHeightMeters),
        totalPhysicsHeight: totalPhysicsHeight,
        viewAngle: viewAngle,
        username: username
      });

      if (!blob) {
        setIsSharing(false);
        return;
      }

      // 3. Create file for sharing
      const file = new File([blob], 'book-stack.png', { type: 'image/png' });

      // Robust check for navigator.share and canShare specifically for FILES
      const canShareFiles = typeof navigator.canShare === 'function' &&
        typeof navigator.share === 'function' &&
        navigator.canShare({ files: [file] });

      if (canShareFiles) {
        try {
          await navigator.share({
            files: [file],
            title: 'My Book Stack',
            text: `I read ${totalHeightMeters.toFixed(2)}m of books this year!`,
            url: window.location.href,
          });
          setIsSharing(false);
          return;
        } catch (shareErr: any) {
          if (shareErr.name === 'AbortError') {
            setIsSharing(false);
            return;
          }
          console.warn('Native file share failed:', shareErr);
        }
      }

      // 4. Fallback: Show the premium ShareModal
      setLastBlob(blob);
      const modal = document.getElementById('share_modal') as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }

    } catch (err) {
      console.error('Error sharing:', err);
    } finally {
      setIsSharing(false);
    }
  };

  const handleDownload = () => {
    if (!lastBlob) return;
    const url = URL.createObjectURL(lastBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `book-stack-${selectedYear || 'all-time'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const isSceneLoading = (viewMode === '3d' && (!allBooksLoaded || (!hasDroppedOnce.current && !physicsStarted))) || isLoading;

  return (
    <div style={{ width: '100%', height: '100%', background: backgroundColor, position: 'relative', overflow: 'hidden', color: '#000' }}>
      <LoadingOverlay isLoading={isSceneLoading} />

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

      {!isSceneLoading && (
        <TopOverlay
          selectedYear={selectedYear}
          totalHeightMeters={totalHeightMeters}
          username={username}
          useFeetAndInches={useFeetAndInches}
        />
      )}

      <BottomControls
        viewMode={viewMode}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        availableYears={availableYears}
        userPhysicsEnabled={userPhysicsEnabled}
        setUserPhysicsEnabled={setUserPhysicsEnabled}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        onShare={handleNativeShare}
        isSharing={isSharing}
        onCenterCamera={handleCenterCamera}
        showPerson={showPerson}
        setShowPerson={setShowPerson}
        onUsernameSubmit={setUsername}
        viewAngle={viewAngle}
        useFeetAndInches={useFeetAndInches}
        setUseFeetAndInches={setUseFeetAndInches}
        excludeAudiobooks={excludeAudiobooks}
        setExcludeAudiobooks={setExcludeAudiobooks}
      />

      <ShareModal
        id="share_modal"
        url={window.location.href}
        text={`I read ${totalHeightMeters.toFixed(2)}m of books this year!`}
        onDownload={handleDownload}
        onCopy={handleCopyLink}
      />

      {viewMode === '3d' ? (
        <Canvas shadows>
          <OrthographicCamera makeDefault position={viewAngle === 'flat' ? [0, 2, 5] : [6, 3, 6]} zoom={85} near={-100} far={2000} />
          <color attach="background" args={[backgroundColor]} />
          <Physics
            key={`physics-${singleYearBooks.length}`}
            gravity={[0, -9.81, 0]}
            paused={!physicsStarted || !allBooksLoaded || !userPhysicsEnabled}
            timeStep="vary"
            interpolate={false}
            numSolverIterations={8}
            numInternalPgsIterations={10}
          >
            <ambientLight intensity={0.8} />
            <directionalLight
              position={[5, 15, 5]}
              intensity={1.2}
              castShadow
              shadow-mapSize={[2048, 2048]}
              shadow-camera-left={-40}
              shadow-camera-right={40}
              shadow-camera-top={40}
              shadow-camera-bottom={-40}
              shadow-camera-far={200}
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
              position={[-2, 10, -5]}
              intensity={0.3}
              color="#EEC2EB"
              castShadow
              shadow-mapSize={[1024, 1024]}
              shadow-camera-left={-20}
              shadow-camera-right={20}
              shadow-camera-top={20}
              shadow-camera-bottom={-20}
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

            <directionalLight
              position={[-8, 15, 8]}
              intensity={0.5}
              castShadow
              shadow-mapSize={[2048, 2048]}
              color={getComplementaryColor(backgroundColor)}
              shadow-camera-left={-40}
              shadow-camera-right={40}
              shadow-camera-top={40}
              shadow-camera-bottom={-40}
              shadow-camera-far={200}
            />

            <Ground color={backgroundColor} />

            {showPerson && (
              <Suspense fallback={null}>
                <PersonReference position={[-3.2, 0, 0]} height={13} />
              </Suspense>
            )}

            <Suspense fallback={null}>
              {singleYearBooks.map((bookData, index) => {
                // Mount RigidBodies universally if the user wants them, even while the engine is paused!
                // This forces Rapier to pre-allocate its WASM memory during our quiet RAF warmup loop,
                // eliminating the massive GC instantiation stutter that occurs if we mount them on exactly 
                // the same frame we unpause the physics simulator!
                const mountPhysicsNode = userPhysicsEnabled;
                const waitAtDropHeight = !hasDroppedOnce.current && allBooksLoaded && !physicsStarted;

                const randomX = (mountPhysicsNode || waitAtDropHeight) ? (Math.sin(index * 12.34) - 0.1) * 0.02 : 0;
                const randomZ = (mountPhysicsNode || waitAtDropHeight) ? (Math.cos(index * 56.78) - 0.1) * 0.02 : 0;

                const yPosition = (mountPhysicsNode || waitAtDropHeight)
                  ? dropYPositions[index]
                  : staticYPositions[index];

                const testHeightKey = new URLSearchParams(window.location.search).get('testHeight') || 'normal';

                return (
                  <Book
                    key={`${bookData.book.id}-${bookData.date_added}-${index}-${selectedYear}-${testHeightKey}`}
                    index={index}
                    position={[randomX, yPosition, randomZ]}
                    data={bookData}
                    onHover={handleBookHover}
                    onClick={handleBookClick}
                    isPhysicsEnabled={mountPhysicsNode}
                    onLoad={handleBookLoad}
                  />
                )
              })}
            </Suspense>
          </Physics>

          <CameraManager ref={cameraManagerRef} target={[0, 2, 0]} />

          <Preload all />
          <fog attach="fog" args={[backgroundColor, 40, 150]} />
        </Canvas>
      ) : viewMode === 'yearly' ? (
        <Suspense fallback={<LoadingOverlay isLoading={true} />}>
          <YearlyBookPiles books={books} isPhysicsEnabled={physicsStarted && userPhysicsEnabled} showCards={!!username} />
        </Suspense>
      ) : (
        <Suspense fallback={<LoadingOverlay isLoading={true} />}>
          <BookGallery books={books} />
        </Suspense>
      )}

      {viewMode === '3d' && (pinnedBook || hoveredBook) && (
        <div style={{
          position: 'absolute',
          top: window.innerWidth < 768 ? 'auto' : '120px',
          bottom: window.innerWidth < 768 ? '160px' : 'auto',
          right: window.innerWidth < 768 ? '50%' : '24px',
          transform: window.innerWidth < 768 ? 'translateX(50%)' : 'none',
          zIndex: 1000,
          width: window.innerWidth < 768 ? '92%' : 'auto',
          maxWidth: window.innerWidth < 768 ? '400px' : 'none'
        }}>
          <Suspense fallback={null}>
            <ModernBookCard
              bookData={(hoveredBook || pinnedBook)!}
              isTooltip={true}
              isPinned={!!pinnedBook && (!hoveredBook || hoveredBook.book.title === pinnedBook.book.title)}
              onClose={() => setPinnedBook(null)}
            />
          </Suspense>
        </div>
      )}
    </div>
  )
}

export default App

// query MyQuery($username: citext!) {
//   user_books(where: {user: {username: {_eq: $username}}, user_book_reads: {finished_at: {_is_null: false}}}) {
//     book {
//       slug
//       title
//       cached_contributors(path: "$.[0].author.name")
//       cached_image
//       id
//       pages
//     }
//     user_book_reads(where: {finished_at: {_is_null: false}}) {
//       finished_at
//       user_book {
//         rating
//       }
//     }
//   }
// }
