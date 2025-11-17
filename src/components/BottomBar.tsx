"use client";

import React from 'react';

export default function BottomBar() {
  return (
    <footer className="absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black/50 to-transparent p-4 pb-[calc(1rem+var(--safe-area-bottom))]">
      <div className="text-white">
        <div className="flex items-center gap-2">
          <strong className="text-sm font-bold sm:text-base">@nazwaautora</strong>
        </div>
        <h2 className="mt-1 text-xs sm:text-sm">Tytuł filmu...</h2>
        <p className="mt-1 text-xs">Krótki opis wideo, który może być dłuższy...</p>
      </div>
      <div className="relative mt-2 h-1 w-full rounded-full bg-white/30">
        <div className="absolute top-0 left-0 h-full w-1/2 rounded-full bg-white"></div>
      </div>
    </footer>
  );
}
