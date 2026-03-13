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
    onInstagramSnap: () => void;
    onCenterCamera: () => void;
    showPerson: boolean;
    setShowPerson: (show: boolean) => void;
}

export const BottomControls: React.FC<BottomControlsProps> = ({
    viewMode,
    selectedYear,
    setSelectedYear,
    availableYears,
    userPhysicsEnabled,
    setUserPhysicsEnabled,
    backgroundColor,
    setBackgroundColor,
    onInstagramSnap,
    onCenterCamera,
    showPerson,
    setShowPerson
}) => {
    const [username, setUsername] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get('username') || '';
    });

    const handleUsernameSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            window.location.search = `?username=${username.trim()}`;
        }
    };

    return (
        <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            padding: '12px',
            borderRadius: '24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '0.85rem',
            width: '90%',
            maxWidth: 'fit-content'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {viewMode === '3d' && availableYears.length > 0 && (
                        <select
                            value={selectedYear || ''}
                            onChange={(e) => setSelectedYear(Number(e.target.value))}
                            style={selectStyle}
                        >
                            {availableYears.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                            <option value={0}>All Time</option>
                        </select>
                    )}

                    {(viewMode === '3d' || viewMode === 'yearly') && (
                        <label style={{ cursor: 'pointer', userSelect: 'none', display: 'flex', alignItems: 'center', gap: '6px', color: '#4B5563', fontWeight: 600 }}>
                            <input
                                type="checkbox"
                                checked={userPhysicsEnabled}
                                onChange={(e) => setUserPhysicsEnabled(e.target.checked)}
                                style={{ accentColor: '#4F46E5', cursor: 'pointer' }}
                            />
                            Physics
                        </label>
                    )}
                </div>

                <div style={{ width: '1px', height: '16px', background: '#E5E7EB', display: 'block' }} />

                <form onSubmit={handleUsernameSubmit} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                        type="text"
                        placeholder="Hardcover Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{
                            padding: '6px 12px',
                            borderRadius: '10px',
                            border: '1px solid #E5E7EB',
                            outline: 'none',
                            width: '120px',
                            fontSize: '0.8rem',
                            background: 'rgba(255,255,255,0.5)'
                        }}
                    />
                    <button type="submit" style={{
                        padding: '6px 12px',
                        borderRadius: '10px',
                        border: 'none',
                        background: '#4F46E5',
                        color: 'white',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: '0.8rem'
                    }}>Fetch</button>
                </form>
            </div>

            <div style={{ width: '100%', height: '1px', background: '#E5E7EB' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#4B5563', fontWeight: 600 }}>BG:</span>
                    {['#4F46E5', '#F6BDCC', '#094229'].map(color => (
                        <button
                            key={color}
                            onClick={() => setBackgroundColor(color)}
                            style={{
                                ...colorBtnStyle,
                                background: color,
                                border: backgroundColor === color ? '2px solid #000' : 'none',
                                transform: backgroundColor === color ? 'scale(1.15)' : 'scale(1)',
                                transition: 'all 0.15s ease'
                            }}
                        />
                    ))}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                        onClick={onCenterCamera}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '12px',
                            border: '1px solid #E5E7EB',
                            background: '#fff',
                            color: '#374151',
                            fontWeight: 600,
                            cursor: 'pointer',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                            fontSize: '0.8rem'
                        }}
                    >
                        Center
                    </button>

                    <button
                        onClick={onInstagramSnap}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '12px',
                            border: 'none',
                            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                            color: 'white',
                            fontWeight: 700,
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(220, 39, 67, 0.2)',
                            fontSize: '0.8rem'
                        }}
                    >
                        Instagram Story
                    </button>
                </div>
            </div>
        </div>
    );
};

const selectStyle: React.CSSProperties = {
    padding: '6px 12px',
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    background: '#fff',
    color: '#374151',
    fontWeight: 500,
    fontSize: '0.8rem',
    cursor: 'pointer',
    outline: 'none',
};

const colorBtnStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    cursor: 'pointer',
    padding: 0,
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
};
