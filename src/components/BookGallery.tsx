import { BookImage } from './BookImage';
import { BookData } from '../Book';

type BookGalleryProps = {
  books: BookData[];
};

export function BookGallery({ books }: BookGalleryProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '2rem',
      padding: '2rem',
    }}>
      {books.map((bookData) => (
        <div key={bookData.book.title} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}>
          {bookData.book.image && (
            <BookImage
              imageUrl={bookData.book.image.url}
              alt={bookData.book.title}
              width={200}
              height={320}
              className="book-cover"
            />
          )}
          <h3 style={{
            margin: 0,
            fontSize: '1rem',
            textAlign: 'center',
            color: '#333',
          }}>
            {bookData.book.title}
          </h3>
          <p style={{
            margin: 0,
            fontSize: '0.875rem',
            color: '#666',
          }}>
            {bookData.book.cached_contributors
              .filter(c => !c.contribution || c.contribution === 'Author')
              .map(c => c.author.name)
              .join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
} 