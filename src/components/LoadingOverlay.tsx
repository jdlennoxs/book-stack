import React from 'react';

interface LoadingOverlayProps {
    isLoading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
    // We want the overlay to keep the backdrop-blur even while fading for a premium effect
    return (
        <div
            id="loading-overlay"
            className={`absolute inset-0 bg-black/20 backdrop-blur-md flex flex-col justify-center items-center z-[999] text-white font-sans transition-all duration-1000 ease-in-out gap-4 ${isLoading
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className={`flex flex-col items-center gap-8 transition-all duration-700 ${isLoading ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                <div className="relative">
                    <span className="loading loading-spinner w-20 h-20 text-white/80"></span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/5 rounded-full blur-xl animate-pulse"></div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl font-extralight tracking-[0.3em] uppercase opacity-90 drop-shadow-2xl animate-fade-in">
                        Loading
                    </span>
                    <span className="text-sm font-light tracking-[0.5em] uppercase opacity-60">
                        Please wait
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoadingOverlay;