import { useState, useEffect } from 'react';
import { config } from '../config';

type BookImageProps = {
  imageUrl: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export function BookImage({ imageUrl, alt, width, height, className }: BookImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get the proxied URL
  const proxiedUrl = config.getProxiedImageUrl(imageUrl);

  useEffect(() => {
    // Reset states when URL changes
    setLoading(true);
    setError(null);

    // Preload the image
    const img = new Image();
    img.src = proxiedUrl;
    
    img.onload = () => {
      setLoading(false);
    };
    
    img.onerror = () => {
      setError('Failed to load image');
      setLoading(false);
    };
  }, [proxiedUrl]);

  if (loading) {
    return <div className={className}>Loading...</div>;
  }

  if (error) {
    return <div className={className}>{error}</div>;
  }

  return (
    <img 
      src={proxiedUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
} 