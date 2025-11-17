"use client";

import React from 'react';
import { MenuIcon, BellIcon } from 'lucide-react';
import LoginAccountPopover from './LoginAccountPopover';

interface TopBarProps {
  onMenuClick: () => void;
  onBellClick: () => void;
  onProfileClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick, onBellClick, onProfileClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 h-[56px] bg-nav md:max-w-[420px] md:mx-auto">
      <div className="flex items-center justify-between h-full px-4">
        <button onClick={onMenuClick} className="text-text-primary">
          <MenuIcon size={24} />
        </button>
        <LoginAccountPopover onProfileClick={onProfileClick} />
        <button onClick={onBellClick} className="text-text-primary">
          <BellIcon size={24} />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
