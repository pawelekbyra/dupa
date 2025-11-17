
"use client";

import { Heart, MessageSquare, Share, MoreHorizontal } from 'lucide-react';

interface SidebarProps {
  onCommentsClick: () => void;
  onShareClick: () => void;
  onMoreOptionsClick: () => void;
}

const Sidebar = ({ onCommentsClick, onShareClick, onMoreOptionsClick }: SidebarProps) => {
  return (
    <aside className="absolute top-1/2 right-2 -translate-y-1/2 z-20 flex flex-col items-center gap-4">
      <button className="flex flex-col items-center gap-1 text-black">
        <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-black flex items-center justify-center relative">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Avatar" className="rounded-full w-full h-full object-cover" />
          <div className="absolute -bottom-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">+</div>
        </div>
      </button>

      <button className="flex flex-col items-center gap-1 text-black">
        <Heart size={32} />
        <span className="text-xs font-semibold">0</span>
      </button>

      <button onClick={onCommentsClick} className="flex flex-col items-center gap-1 text-black">
        <MessageSquare size={32} />
        <span className="text-xs font-semibold">0</span>
      </button>

      <button onClick={onShareClick} className="flex flex-col items-center gap-1 text-black">
        <Share size={32} />
        <span className="text-xs font-semibold">Szeruj</span>
      </button>

      <button onClick={onMoreOptionsClick} className="flex flex-col items-center gap-1 text-black">
        <MoreHorizontal size={32} />
        <span className="text-xs font-semibold">Więcej</span>
      </button>
    </aside>
  );
};

export default Sidebar;
