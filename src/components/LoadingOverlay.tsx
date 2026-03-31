import React from 'react';

interface LoadingOverlayProps {
    isLoading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
    if (!isLoading) {
        return null;
    }

    return (
        <div id="loading-overlay" className="absolute inset-0 bg-[#4F46E5] flex flex-col justify-center items-center z-[999] text-white font-sans transition-opacity duration-500 ease-out opacity-100 pointer-events-none gap-4">
            <span className="loading loading-spinner w-12 h-12 text-white"></span>
            <span className="text-2xl font-normal tracking-wide">Loading books...</span>
        </div>
    );
};

export default LoadingOverlay;