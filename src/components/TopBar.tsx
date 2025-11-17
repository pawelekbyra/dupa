"use client";

import React from 'react';
import { Bell } from 'lucide-react';
import UserMenuSheet from './UserMenuSheet';
import LoginModal from './LoginModal';

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 z-20 flex h-16 w-full items-center justify-between bg-black px-4 text-white">
      <UserMenuSheet />
      <LoginModal />
      <button>
        <Bell size={24} />
      </button>
    </header>
  );
}
