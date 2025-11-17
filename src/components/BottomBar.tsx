"use client";

import React from 'react';

export default function BottomBar() {
  return (
    <footer className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-black/50 to-transparent p-4 pb-[calc(1rem+var(--safe-area-bottom))]">
      <div className="text-white">
        <div className="flex items-center gap-2">
          <strong className="text-base font-bold">@authorname</strong>
        </div>
        <h2 className="mt-1 text-sm">Video title</h2>
        <p className="mt-1 text-xs">Video description...</p>
      </div>
    </footer>
  );
}
