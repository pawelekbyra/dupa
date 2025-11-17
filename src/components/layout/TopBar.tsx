'use client';

import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-black text-white z-50 flex items-center justify-between px-4">
      <Button variant="ghost" size="icon">
        <Menu className="h-6 w-6" />
      </Button>
      <h1 className="text-lg font-semibold cursor-pointer">
        Nie masz psychy się zalogować
      </h1>
      <Button variant="ghost" size="icon">
        <Bell className="h-6 w-6" />
      </Button>
    </header>
  );
};

export default TopBar;
