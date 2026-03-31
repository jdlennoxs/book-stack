import { BookData } from '../Book';
import { ModernBookCard } from './ModernBookCard';

type BookGalleryProps = {
  books: BookData[];
};

export function BookGallery({ books }: BookGalleryProps) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F3F4F6', // Subtle off-white/gray background
      overflowY: 'auto', // Allow scrolling on the wrapper
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '2.5rem',
        padding: '6rem 3rem 3rem 3rem', // Extra top padding for navbar
        width: '100%',
        maxWidth: '1600px', // Prevent it from stretching too far on ultrawide
        margin: '0 auto', // Center it
        boxSizing: 'border-box',
      }}>
        {books.map((bookData) => (
          <ModernBookCard key={`${bookData.book.id}-${bookData.date_added}`} bookData={bookData} />
        ))}
      </div>
    </div>
  );
} 