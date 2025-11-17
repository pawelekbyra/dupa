"use client";

import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function BottomBar() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <footer className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-black/50 to-transparent p-4 pb-[calc(1rem+var(--safe-area-bottom))]">
      <div className="relative text-white">
        <div className="absolute -top-6 left-0 flex w-full items-center justify-center">
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        </div>
        <div className="h-1 w-full rounded-full bg-white/30">
          <div className="h-full w-1/2 rounded-full bg-white"></div>
        </div>
      </div>
    </footer>
  );
}
