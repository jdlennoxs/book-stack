import React from 'react';
import { getComparison } from '../utils/heightComparisons';

interface TopOverlayProps {
    selectedYear: number | null;
    totalHeightMeters: number;
    username: string;
}

export const TopOverlay: React.FC<TopOverlayProps> = ({ selectedYear, totalHeightMeters, username }) => {
    return (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-[1000] bg-white/85 backdrop-blur-md border border-white/50 py-3 px-5 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.05)] flex items-center justify-center font-sans w-[92%] max-w-[400px] sm:w-[380px] text-center">
            <div className="flex flex-col justify-center">
                <p className="m-0 mb-0.5 text-[0.85rem] text-[#6B7280] font-normal uppercase tracking-widest">
                    {selectedYear === null ? `${username || 'you'} read` : `In ${selectedYear} ${username || 'you'} read`}
                </p>
                <div className="text-[1.4rem] font-semibold text-[#111827] leading-tight">
                    {totalHeightMeters.toFixed(2)} metres
                </div>
                <p className="m-0 mt-0.5 text-[0.85rem] text-[#4B5563] font-normal">
                    <span className="text-[#6B7280]">That's the same as... </span>{getComparison(totalHeightMeters)}
                </p>
            </div>
        </div>
    );
};
