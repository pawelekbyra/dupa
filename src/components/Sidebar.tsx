"use client";

import React from 'react';
import { Heart, MessageCircle, Share } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="absolute right-2 bottom-20 z-10 flex flex-col items-center gap-4">
      <button className="flex flex-col items-center text-white">
        <Heart size={28} className="sm:h-8 sm:w-8" />
      </button>
      <button className="flex flex-col items-center text-white">
        <MessageCircle size={28} className="sm:h-8 sm:w-8" />
      </button>
      <button className="flex flex-col items-center text-white">
        <Share size={28} className="sm:h-8 sm:w-8" />
      </button>
    </aside>
  );
}
