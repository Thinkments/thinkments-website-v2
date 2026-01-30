import React from 'react';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1120] backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Logo/Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-t-[#00B4D8] border-r-transparent border-b-[#00B4D8] border-l-transparent animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-t-[#F7B928] border-r-transparent border-b-[#F7B928] border-l-transparent animate-[spin_1s_linear_infinite_reverse]"></div>
        </div>
        <p className="text-[#00B4D8] font-medium tracking-widest text-sm animate-pulse">LOADING</p>
      </div>
    </div>
  );
}
