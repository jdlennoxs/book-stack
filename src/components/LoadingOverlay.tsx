import React from 'react';

interface LoadingOverlayProps {
    isLoading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
    if (!isLoading) {
        return null;
    }

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(79, 70, 229, 1)', // Use theme background color with opacity
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1001, // Ensure it's above the info box but below the controls
            color: 'white',
            fontSize: '1.5em',
            fontFamily: 'Inter, system-ui, sans-serif',
            transition: 'opacity 0.5s ease-out', // Smooth fade-out
            opacity: 1,
            pointerEvents: 'none', // Allow clicks through when faded
        }}>
            Loading books...
            {/* You could add a spinner animation here */}
        </div>
    );
};

export default LoadingOverlay; 