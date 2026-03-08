import React from 'react';

const HeroSkeleton = () => {
    return (
    /* h-[70vh] md:h-[95vh] ensures it covers the background like a real Hero image */
        <div className="relative w-full h-[70vh] md:h-[95vh] bg-[#040714] overflow-hidden">
            
        {/* 1. The Main Background Pulse */}
            <div className="absolute inset-0 bg-gray-800/40 animate-pulse" />

        {/* 2. The Overlays (Matches your real Hero's gradient) */}
            <div className="absolute inset-0 bg-linear-to-t from-[#040714] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-[#040714]/80 via-transparent to-transparent" />

        {/* 3. The Content Placeholders */}
            <div className="absolute bottom-[20%] left-6 md:left-12 max-w-2xl space-y-6">
            
            {/* Title Placeholder */}
                <div className="h-12 md:h-20 w-3/4 bg-gray-700/50 rounded-lg animate-pulse" />
            
            {/* Description Lines */}
                <div className="space-y-3">
                    <div className="h-4 w-full bg-gray-700/30 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-gray-700/30 rounded animate-pulse" />
                    <div className="h-4 w-2/3 bg-gray-700/30 rounded animate-pulse" />
                </div>

            {/* Buttons (Play & Info) */}
                <div className="flex gap-4 pt-4">
                    <div className="h-12 w-32 md:w-40 bg-gray-700/50 rounded-md animate-pulse" />
                    <div className="h-12 w-32 md:w-40 bg-gray-700/20 rounded-md animate-pulse border border-gray-700/50" />
                </div>
            </div>
        </div>
    );
};

export default HeroSkeleton;