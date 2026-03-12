import React from 'react';
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
            <svg key={key} width="16" height="16" viewBox="0 0 24 24" fill={starType === 'full' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
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

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: isTooltip ? 'rgba(255, 255, 255, 0.85)' : '#ffffff',
        backdropFilter: isTooltip ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isTooltip ? 'blur(12px)' : 'none',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: isTooltip
            ? '0 8px 32px rgba(0, 0, 0, 0.12)'
            : '0 10px 25px rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        width: isTooltip ? '280px' : '100%',
        maxWidth: isTooltip ? '280px' : '100%',
        boxSizing: 'border-box',
        textAlign: 'center',
        pointerEvents: (isTooltip && !isPinned) ? 'none' : 'auto', // Ensures tooltip doesn't interfere with 3D interactions unless pinned
        position: 'relative'
    };

    const imageContainerStyle: React.CSSProperties = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '16px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    };

    return (
        <div style={containerStyle} className={!isTooltip ? 'modern-book-card-hover' : ''}>
            {isPinned && onClose && (
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(0,0,0,0.05)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#374151',
                        fontSize: '14px',
                        padding: 0,
                        zIndex: 10
                    }}
                    aria-label="Close"
                >
                    ✕
                </button>
            )}

            {bookData.book.image && (
                <div style={imageContainerStyle}>
                    <BookImage
                        imageUrl={bookData.book.image.url}
                        alt={bookData.book.title}
                        width={160}
                        height={240}
                        className="modern-book-cover"
                    />
                </div>
            )}

            {bookData.book.id ? (
                <a
                    href={`https://hardcover.app/books/${bookData.book.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <h3 style={{
                        margin: '0 0 8px 0',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#111827',
                        lineHeight: '1.4',
                        transition: 'color 0.2s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#4F46E5'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#111827'}
                    >
                        <span style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                        }}>
                            {bookData.book.title}
                        </span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, flexShrink: 0, marginTop: '2px' }}>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </h3>
                </a>
            ) : (
                <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#111827',
                    lineHeight: '1.4',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {bookData.book.title}
                </h3>
            )}

            <p style={{
                margin: '0 0 6px 0',
                fontSize: '0.9rem',
                color: '#4B5563',
                fontWeight: 500
            }}>
                by {authors || 'Unknown Author'}
            </p>

            {rating !== undefined && (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    margin: '4px 0 12px 0',
                    color: '#F59E0B' // Amber/Gold color
                }}>
                    {[1, 2, 3, 4, 5].map((star) => {
                        let starType: 'full' | 'half' | 'empty' = 'empty';
                        if (rating >= star) starType = 'full';
                        else if (rating >= star - 0.5) starType = 'half';
                        return renderStar(starType, star);
                    })}
                </div>
            )}

            <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '4px'
            }}>
                <span style={{
                    background: '#F3F4F6',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    fontSize: '0.8rem',
                    color: '#374151',
                    fontWeight: 500
                }}>
                    {pageCount} pages
                </span>

            </div>


        </div>
    );
}
