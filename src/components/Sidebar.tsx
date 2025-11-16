"use client";

import React from 'react';
import { Heart, MessageSquare, Share } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="absolute right-2 bottom-20 flex flex-col items-center gap-4 z-20">
      <button className="flex flex-col items-center gap-1 text-white">
        <Heart size={32} />
        <span className="text-xs">0</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-white">
        <MessageSquare size={32} />
        <span className="text-xs">0</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-white">
        <Share size={32} />
      </button>
    </aside>
  );
};

export default Sidebar;
