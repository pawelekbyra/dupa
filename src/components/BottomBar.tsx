"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, Search, PlusSquare, Clapperboard, User } from 'lucide-react';

const BottomBar = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-1 bg-black text-white border-t border-white/10"
      style={{
        height: 'var(--bottombar-height)',
        paddingBottom: 'var(--safe-area-bottom)',
      }}
    >
      <Button variant="ghost" className="flex flex-col items-center h-full">
        <Home className="w-6 h-6" />
        <span className="text-xs">Home</span>
      </Button>
      <Button variant="ghost" className="flex flex-col items-center h-full">
        <Search className="w-6 h-6" />
        <span className="text-xs">Discover</span>
      </Button>
      <Button variant="ghost" className="flex flex-col items-center h-full">
        <PlusSquare className="w-10 h-10" />
      </Button>
      <Button variant="ghost" className="flex flex-col items-center h-full">
        <Clapperboard className="w-6 h-6" />
        <span className="text-xs">Shorts</span>
      </Button>
      <Button variant="ghost" className="flex flex-col items-center h-full">
        <User className="w-6 h-6" />
        <span className="text-xs">Me</span>
      </Button>
    </div>
  );
};

export default BottomBar;
