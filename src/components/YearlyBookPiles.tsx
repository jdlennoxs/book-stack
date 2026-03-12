import { useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { BookData } from '../Book'
import { Book } from '../Book'
import { Ground } from './Ground'
import { HeightMarkers } from './HeightMarkers'
import { getPageCount } from '../utils/bookUtils'
import { calculateBookDepth } from '../utils/bookDimensions'
import { ModernBookCard } from './ModernBookCard'

type YearlyBookPilesProps = {
  books: BookData[];
  isPhysicsEnabled: boolean;
}

export function YearlyBookPiles({ books, isPhysicsEnabled }: YearlyBookPilesProps) {
  const [hoveredBook, setHoveredBook] = useState<BookData | null>(null);

  // Group books by year
  const booksByYear = useMemo(() => {
    const grouped = books.reduce((acc, book) => {
      const year = new Date(book.date_added).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(book);
      return acc;
    }, {} as Record<number, BookData[]>);

    // Sort years in descending order
    return Object.entries(grouped)
      .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
      .map(([year, yearBooks]) => ({
        year: Number(year),
        books: yearBooks,
        totalHeightMeters: yearBooks.reduce((total, bookData) => {
          const pageCount = getPageCount(bookData);
          const height = pageCount * 0.12 / 1000; // Convert mm to meters
          return total + height;
        }, 0)
      }));
  }, [books]);

  const spacing = 0.25;
  const startY = isPhysicsEnabled ? 7 : 0;
  const pileSpacing = 4; // Space between different year piles

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#FFF', position: 'relative' }}>
      {hoveredBook && (
        <div style={{
          position: 'absolute',
          top: '80px',
          right: '24px',
          zIndex: 1000,
          pointerEvents: 'none',
        }}>
          <ModernBookCard bookData={hoveredBook} isTooltip={true} />
        </div>
      )}

      <Canvas shadows camera={{ position: [15, 5, 15], fov: 50 }}>
        <color attach="background" args={['#4F46E5']} />
        <Physics key={`physics-${isPhysicsEnabled ? 'on' : 'off'}`} gravity={[0, -9.81, 0]}>
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
          />
          <directionalLight
            position={[-5, 1, 3]}
            intensity={0.8}
            color="#FFF8E7"
          />

          <spotLight
            position={[-2, 3, 2]}
            angle={0.3}
            penumbra={0.2}
            intensity={1.5}
            distance={8}
            castShadow
            shadow-mapSize={[2048, 2048]}
            target-position={[0, 1.5, 0]}
          />

          <Ground />

          {/* Add height markers */}
          <HeightMarkers
            maxHeight={3}
            intervalMeters={0.1}
          />

          {booksByYear.map((yearData, yearIndex) => (
            yearData.books.map((bookData, bookIndex) => {
              const randomX = isPhysicsEnabled ? (Math.sin(bookIndex * 12.34) - 0.1) * 0.01 : 0;
              const randomZ = isPhysicsEnabled ? (Math.cos(bookIndex * 56.78) - 0.1) * 0.01 : 0;

              // Calculate Y position based on previous books' depths when physics is off
              const yPosition = isPhysicsEnabled
                ? startY + bookIndex * spacing
                : yearData.books.slice(0, bookIndex).reduce((total, prevBook) => {
                  const prevPageCount = getPageCount(prevBook);
                  const prevDepth = calculateBookDepth(prevPageCount);
                  return total + prevDepth;
                }, 0) + calculateBookDepth(getPageCount(bookData)) / 2;

              return (
                <Book
                  key={`${yearData.year}-${bookData.book.title}`}
                  position={[yearIndex * pileSpacing + randomX, yPosition, randomZ]}
                  data={bookData}
                  onHover={(isHovered) => setHoveredBook(isHovered ? bookData : null)}
                  isPhysicsEnabled={isPhysicsEnabled}
                />
              );
            })
          ))}
        </Physics>

        <OrbitControls
          target={[booksByYear.length * pileSpacing / 2, 2, 0]}
          maxPolarAngle={Math.PI / 2.1}
          minDistance={3}
          maxDistance={40}
        />
        <fog attach="fog" args={['#4F46E5', 30, 100]} />
      </Canvas>
    </div>
  );
} 