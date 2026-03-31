
import { BookData } from '../Book';
import { BookImage } from './BookImage';
import { getPageCount } from '../utils/bookUtils';

type ModernBookCardProps = {
    bookData: BookData;
    isTooltip?: boolean;
    isPinned?: boolean;
    onClose?: () => void;
};

export function ModernBookCard({ bookData, isTooltip = false, isPinned = false, onClose }: ModernBookCardProps) {
    const pageCount = getPageCount(bookData);
    const rating = bookData.rating;
    const authors = bookData.book.cached_contributors || 'Unknown Author';

    // Helper to render star SVGs
    const renderStar = (starType: 'full' | 'half' | 'empty', key: number) => {
        return (
            <svg key={key} width="14" height="14" viewBox="0 0 24 24" fill={starType === 'full' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                {starType === 'half' && (
                    <defs>
                        <linearGradient id={`halfGradient-${key}`}>
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                )}
                <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    fill={starType === 'half' ? `url(#halfGradient-${key})` : (starType === 'full' ? 'currentColor' : 'none')}
                />
            </svg>
        );
    };

    return (
        <div 
            className={`flex flex-col items-center font-sans transition-all duration-300 box-border text-center relative rounded-[24px] p-6 
                ${isTooltip ? 'w-[310px] max-w-[310px] bg-white/90 backdrop-blur-md border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.1)]' : 'w-full max-w-full bg-white border border-white/50 shadow-[0_10px_25px_rgba(0,0,0,0.05)]'} 
                ${!isTooltip ? 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1' : ''}`}
            style={{ 
                pointerEvents: (isTooltip && !isPinned) ? 'none' : 'auto' 
            }}
        >
            {isPinned && onClose && (
                <button
                    onClick={onClose}
                    className="btn btn-circle btn-xs absolute top-4 right-4 bg-gray-100/50 hover:bg-gray-200/50 border-none text-gray-500 z-20"
                    aria-label="Close"
                >
                    ✕
                </button>
            )}

            <div className="flex flex-row-reverse sm:flex-col items-start sm:items-center w-full gap-5">
                {bookData.book.image && (
                    <div className="relative shrink-0 w-[85px] sm:w-[160px] aspect-[2/3] rounded-xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.15)] bg-gray-100/50">
                        <BookImage
                            imageUrl={bookData.book.image.url}
                            alt={bookData.book.title}
                            width={160}
                            height={240}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <div className="flex-1 flex flex-col text-center min-w-0">
                    <div className="flex flex-col items-center">
                        {bookData.book.id ? (
                            <a
                                href={`https://hardcover.app/books/${bookData.book.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline text-inherit group mb-1.5 w-full"
                            >
                                <h3 className="m-0 text-[1.15rem] font-bold text-[#111827] leading-tight transition-colors flex items-center justify-center gap-1.5 group-hover:text-[#4F46E5]">
                                    {/* Ghost spacer to balance the icon and ensure perfect centering */}
                                    <span className="w-3 invisible shrink-0" aria-hidden="true" />
                                    <span className="line-clamp-2">{bookData.book.title}</span>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </h3>
                            </a>
                        ) : (
                            <h3 className="m-0 mb-1.5 text-[1.15rem] font-bold text-[#111827] leading-tight line-clamp-2 text-center w-full">
                                {bookData.book.title}
                            </h3>
                        )}

                        <p className="m-0 mb-3 text-[0.8rem] text-[#6B7280] font-medium uppercase tracking-widest line-clamp-1 text-center w-full">
                            {authors}
                        </p>
                    </div>

                    {rating !== undefined && (
                        <div className="flex items-center justify-center gap-0.5 mb-4 text-amber-400">
                            {[1, 2, 3, 4, 5].map((star) => {
                                let starType: 'full' | 'half' | 'empty' = 'empty';
                                if (rating >= star) starType = 'full';
                                else if (rating >= star - 0.5) starType = 'half';
                                return renderStar(starType, star);
                            })}
                        </div>
                    )}

                    <div className="flex items-center justify-center">
                        <span className="bg-[#F3F4F6] px-3 py-1 rounded-full text-[0.7rem] text-[#4B5563] font-semibold tracking-wide">
                            {pageCount} PAGES
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
