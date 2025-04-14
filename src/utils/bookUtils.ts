import { BookData } from '../Book'

export const getPageCount = (data: BookData): number => {
  let pages = data.book.pages;
  if (!pages || pages === 0) {
    const firstValidEdition = data.book.editions?.find(edition => edition.pages && edition.pages > 0);
    pages = firstValidEdition?.pages || 100;
  }
  return pages;
} 