"use client";

import React from 'react';
import { PlayIcon, PauseIcon, Volume2Icon, FastForwardIcon } from 'lucide-react';

interface BottomBarProps {
  onControlClick: (controlName: string) => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ onControlClick }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 h-[72px] bg-nav md:max-w-[420px] md:mx-auto">
      <div className="h-full w-full flex flex-col justify-start">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#444444]">
          <div className="h-full bg-accent" style={{ width: '40%' }}></div>
        </div>

        {/* Video Controls */}
        <div className="flex items-center justify-around flex-grow pt-2 px-4">
          <button onClick={() => onControlClick('Play/Pause')} className="text-text-primary">
            <PlayIcon size={28} />
          </button>
          <button onClick={() => onControlClick('Volume')} className="text-text-primary">
            <Volume2Icon size={28} />
          </button>
          <button onClick={() => onControlClick('Fast Forward')} className="text-text-primary">
            <FastForwardIcon size={28} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default BottomBar;
