"use client";

import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export default function Sidebar({ onCommentClick }: { onCommentClick: () => void }) {
  return (
    <aside className="absolute right-2 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-4">
      <div className="relative mb-2">
        <button className="h-12 w-12 rounded-full bg-white">
          <img src="https://placehold.co/100x100" alt="Profile" className="h-full w-full rounded-full" />
        </button>
        <div className="absolute -bottom-2 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-black bg-[var(--accent-color)] text-white">
          +
        </div>
      </div>
      <button className="flex flex-col items-center text-white">
        <Heart size={32} />
      </button>
      <button className="flex flex-col items-center text-white" onClick={onCommentClick}>
        <MessageCircle size={32} />
      </button>
      <button className="flex flex-col items-center text-white">
        <Share2 size={32} />
      </button>
    </aside>
  );
}
