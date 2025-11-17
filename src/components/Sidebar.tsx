import React from 'react';
import { Heart, MessageCircle, Share2, UserCircle } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 z-10">
      <button className="flex flex-col items-center text-white">
        <UserCircle size={40} />
      </button>
      <button className="flex flex-col items-center text-white">
        <Heart size={40} />
        <span className="text-xs">0</span>
      </button>
      <button className="flex flex-col items-center text-white">
        <MessageCircle size={40} />
        <span className="text-xs">0</span>
      </button>
      <button className="flex flex-col items-center text-white">
        <Share2 size={40} />
      </button>
    </div>
  );
}
