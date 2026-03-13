import React, { useMemo } from 'react';
import { getArtNouveauBorderSvg } from '../utils/borderSvg';

export const ArtNouveauBorder: React.FC = () => {
    const borderSrc = useMemo(() => getArtNouveauBorderSvg(), []);

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 50,
        }}>
            <img
                src={borderSrc}
                alt="Art Nouveau Border"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill', // Ensures the frame stretches to exactly box the view
                }}
            />
        </div>
    );
};
