import React from 'react';
import { getComparison } from '../utils/heightComparisons';

interface TopOverlayProps {
    selectedYear: number | null;
    totalHeightMeters: number;
}

export const TopOverlay: React.FC<TopOverlayProps> = ({ selectedYear, totalHeightMeters }) => {
    return (
        <div style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            padding: '12px 20px',
            borderRadius: '24px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Inter", system-ui, sans-serif',
            width: '90%',
            maxWidth: '380px',
            textAlign: 'center'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ margin: '0 0 2px 0', fontSize: '0.85rem', color: '#6B7280', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {selectedYear === 0 ? 'All time you read' : `In ${selectedYear} you read`}
                </p>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827', lineHeight: '1.1' }}>
                    {totalHeightMeters.toFixed(2)} metres
                </div>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.85rem', color: '#4B5563', fontWeight: 500 }}>
                    ≈ {getComparison(totalHeightMeters)}
                </p>
            </div>
        </div>
    );
};
