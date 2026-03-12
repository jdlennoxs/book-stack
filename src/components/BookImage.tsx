import { useState } from 'react';
import { config } from '../config';

type BookImageProps = {
  imageUrl: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

// Simple cache to avoid re-fetching images that the 3D scene already loaded
const loadedUrls = new Set<string>();

export function BookImage({ imageUrl, alt, width, height, className }: BookImageProps) {
  const proxiedUrl = config.getProxiedImageUrl(imageUrl);

  // If we've seen this URL before (e.g. from the 3D book covers), it's in the browser cache
  const [loaded, setLoaded] = useState(() => loadedUrls.has(proxiedUrl));
  const [error, setError] = useState(false);

  return (
    <>
      {!loaded && !error && (
        <div className={className} style={{ background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', width, height, fontSize: '0.75rem', color: '#9ca3af' }}>
          Loading...
        </div>
      )}
      <img
        src={proxiedUrl}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: loaded ? 'block' : 'none' }}
        onLoad={() => {
          loadedUrls.add(proxiedUrl);
          setLoaded(true);
        }}
        onError={() => setError(true)}
      />
      {error && (
        <div className={className} style={{ background: '#f3f4f6', width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#9ca3af' }}>
          No cover
        </div>
      )}
    </>
  );
}