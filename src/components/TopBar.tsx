"use client";

import React from 'react';
import { Menu, Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="absolute top-0 left-0 z-20 flex h-[var(--topbar-height)] w-full items-center justify-center px-4 pt-[var(--safe-area-top)] text-white">
      <button className="absolute left-4 top-1/2 -translate-y-1/2">
        <Menu size={24} />
      </button>
      <div className="relative">
        <span className="text-lg font-semibold">For You</span>
      </div>
      <button className="absolute right-4 top-1/2 -translate-y-1/2">
        <Bell size={24} />
        <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></div>
      </button>
    </header>
  );
}
