import React, { useState } from 'react';


interface BottomControlsProps {
    viewMode: '3d' | 'gallery' | 'yearly';
    selectedYear: number | null;
    setSelectedYear: (year: number) => void;
    availableYears: number[];
    userPhysicsEnabled: boolean;
    setUserPhysicsEnabled: (enabled: boolean) => void;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
    onShare: () => void;
    onCenterCamera: (angle: 'flat' | 'isometric') => void;
    showPerson: boolean;
    setShowPerson: (show: boolean) => void;
    onUsernameSubmit: (username: string) => void;
    viewAngle: 'flat' | 'isometric';
    isSharing?: boolean;
    useFeetAndInches: boolean;
    setUseFeetAndInches: (enabled: boolean) => void;
    excludeAudiobooks: boolean;
    setExcludeAudiobooks: (enabled: boolean) => void;
}

const getContrastColor = (hexColor: string) => {
    // If the color is quite light (like yellow), use black text
    const lightColors = ['#E1AD01', '#f788a5'];
    return lightColors.includes(hexColor.toUpperCase()) || lightColors.includes(hexColor.toLowerCase())
        ? '#1a1a1a'
        : '#ffffff';
};

export const BottomControls: React.FC<BottomControlsProps> = ({
    viewMode,
    selectedYear,
    setSelectedYear,
    availableYears,
    userPhysicsEnabled,
    setUserPhysicsEnabled,
    backgroundColor,
    setBackgroundColor,
    onShare,
    onCenterCamera,
    onUsernameSubmit,
    viewAngle,
    isSharing = false,
    useFeetAndInches,
    setUseFeetAndInches,
    excludeAudiobooks,
    setExcludeAudiobooks
}) => {
    const [username, setUsername] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get('username') || '';
    });
    const [showSettings, setShowSettings] = useState(false);

    const handleUsernameSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = username.trim();
        if (trimmed) {
            onUsernameSubmit(trimmed);
        }
    };

    return (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[1000] bg-white/75 backdrop-blur-md border border-white/40 p-3 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex flex-col items-center gap-3 font-sans w-[95%] sm:w-max" style={{ fontSize: '0.85rem' }}>
            <div className="flex items-center gap-4 flex-wrap justify-center">
                <form onSubmit={handleUsernameSubmit} className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Hardcover Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input input-sm border-[#E5E7EB] bg-white/50 text-gray-800 placeholder-gray-500 w-[120px] focus:outline-none"
                        style={{ borderRadius: '10px', height: '32px', fontSize: '0.8rem' }}
                    />
                    <button
                        type="submit"
                        className="btn btn-sm border-none font-medium cursor-pointer select-none"
                        style={{
                            height: '32px',
                            borderRadius: '10px',
                            fontSize: '0.8rem',
                            backgroundColor: backgroundColor,
                            color: getContrastColor(backgroundColor)
                        }}
                    >
                        Fetch
                    </button>
                </form>
                <div className="hidden sm:block w-px h-4 bg-[#E5E7EB]" />
                <div className="flex items-center gap-2">
                    {viewMode === '3d' && availableYears.length > 0 && (
                        <select
                            value={selectedYear || ''}
                            onChange={(e) => setSelectedYear(Number(e.target.value))}
                            className="select select-sm select-bordered bg-white text-[#374151] font-medium border-[#E5E7EB] focus:outline-none"
                            style={{ borderRadius: '8px', minHeight: '32px', height: '32px', fontSize: '0.8rem' }}
                        >
                            {availableYears.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    )}

                    {(viewMode === '3d' || viewMode === 'yearly') && (
                        <div className="relative">
                            <button
                                onClick={() => setShowSettings(!showSettings)}
                                className={`flex items-center justify-center rounded-lg transition-colors border border-gray-200 text-[#4B5563] cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.05)]`}
                                style={{
                                    height: '32px',
                                    width: '32px',
                                    backgroundColor: showSettings ? backgroundColor : 'rgba(255, 255, 255, 0.6)',
                                    color: showSettings ? getContrastColor(backgroundColor) : '#4B5563'
                                }}
                                title="Settings"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showSettings ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                </svg>
                            </button>

                            {showSettings && (
                                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-white border border-gray-200 p-4 rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.15)] flex flex-col gap-3 min-w-[200px] animate-in fade-in slide-in-from-bottom-2 duration-200 z-[1001]">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-[#4B5563] font-medium uppercase text-[0.65rem] tracking-wider">Physics</span>
                                        <input
                                            type="checkbox"
                                            checked={userPhysicsEnabled}
                                            onChange={(e) => setUserPhysicsEnabled(e.target.checked)}
                                            className="toggle toggle-sm"
                                            style={{ '--tbc': backgroundColor } as any}
                                        />
                                    </div>
                                    <div className="h-px bg-gray-100" />
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-[#4B5563] font-medium uppercase text-[0.65rem] tracking-wider">Feet & Inches</span>
                                        <input
                                            type="checkbox"
                                            checked={useFeetAndInches}
                                            onChange={(e) => setUseFeetAndInches(e.target.checked)}
                                            className="toggle toggle-sm"
                                            style={{ '--tbc': backgroundColor } as any}
                                        />
                                    </div>
                                    <div className="h-px bg-gray-100" />
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-[#4B5563] font-medium uppercase text-[0.65rem] tracking-wider">Exclude Audiobooks</span>
                                        <input
                                            type="checkbox"
                                            checked={excludeAudiobooks}
                                            onChange={(e) => setExcludeAudiobooks(e.target.checked)}
                                            className="toggle toggle-sm"
                                            style={{ '--tbc': backgroundColor } as any}
                                        />
                                    </div>
                                    <div className="h-px bg-gray-100" />
                                    <button 
                                        onClick={() => window.dispatchEvent(new CustomEvent('EXPLODE_TOWER'))} 
                                        className="btn btn-sm btn-ghost text-red-500 hover:bg-red-50"
                                        style={{ fontSize: '0.7rem' }}
                                    >
                                        🧨 EXPLODE TOWER
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>

            <div className="w-full h-px bg-[#E5E7EB]" />

            <div className="flex items-center gap-4 flex-wrap justify-center">
                <div className="flex items-center gap-2">
                    <span className="text-[#4B5563] font-medium">BG:</span>
                    {['#E1AD01', '#4F46E5', '#f788a5', '#094229'].map(color => (
                        <button
                            key={color}
                            onClick={() => setBackgroundColor(color)}
                            className="w-6 h-6 rounded-full cursor-pointer p-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in-out border-none"
                            style={{
                                background: color,
                                border: backgroundColor === color ? '2px solid #000' : 'none',
                                transform: backgroundColor === color ? 'scale(1.15)' : 'scale(1)',
                            }}
                        />
                    ))}
                </div>

                <div className="flex gap-2 items-center">


                    <button
                        onClick={() => onCenterCamera('flat')}
                        className={`btn btn-sm cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-colors tooltip tooltip-top border-none`}
                        data-tip="Flat View"
                        style={{
                            height: '36px',
                            width: '36px',
                            padding: 0,
                            borderRadius: '12px',
                            backgroundColor: viewAngle === 'flat' ? backgroundColor : '#fff',
                            color: viewAngle === 'flat' ? getContrastColor(backgroundColor) : '#374151'
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="4" y="4" width="16" height="4" rx="1" />
                            <rect x="4" y="10" width="16" height="4" rx="1" />
                            <rect x="4" y="16" width="16" height="4" rx="1" />
                        </svg>
                    </button>

                    <button
                        onClick={() => onCenterCamera('isometric')}
                        className={`btn btn-sm cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-colors tooltip tooltip-top border-none`}
                        data-tip="Isometric View"
                        style={{
                            height: '36px',
                            width: '36px',
                            padding: 0,
                            borderRadius: '12px',
                            backgroundColor: viewAngle === 'isometric' ? backgroundColor : '#fff',
                            color: viewAngle === 'isometric' ? getContrastColor(backgroundColor) : '#374151'
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                    </button>

                    <div className="hidden sm:block w-px h-4 bg-[#E5E7EB]" />

                    <button
                        onClick={onShare}
                        disabled={isSharing}
                        className={`btn btn-sm border-none font-medium cursor-pointer hover:opacity-90 transition-opacity tooltip tooltip-top ${isSharing ? 'loading pointer-events-none' : ''}`}
                        data-tip={isSharing ? "Preparing..." : "Share"}
                        style={{
                            height: '36px',
                            width: '36px',
                            minHeight: '36px',
                            padding: 0,
                            borderRadius: '12px',
                            background: backgroundColor,
                            color: getContrastColor(backgroundColor),
                            boxShadow: `0 4px 12px ${backgroundColor}33`
                        }}
                    >
                        {!isSharing && (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                <polyline points="16 6 12 2 8 6"></polyline>
                                <line x1="12" y1="2" x2="12" y2="15"></line>
                            </svg>
                        )}
                        {isSharing && <span className="loading loading-spinner loading-xs"></span>}
                    </button>
                </div>
            </div>
        </div>
    );
};
