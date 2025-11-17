'use client';

import React from 'react';
import { User, Heart, MessageCircle, Share2, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Sidebar = () => {
  return (
    <aside className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col items-center space-y-6 z-40">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white h-12 w-12 rounded-full">
            <User className="h-8 w-8" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Konto</DropdownMenuItem>
          <DropdownMenuItem>Wyloguj</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex flex-col items-center">
        <Button variant="ghost" size="icon" className="text-white h-12 w-12">
          <Heart className="h-8 w-8" />
        </Button>
        <span className="text-white text-sm">1.2M</span>
      </div>

      <div className="flex flex-col items-center">
        <Button variant="ghost" size="icon" className="text-white h-12 w-12">
          <MessageCircle className="h-8 w-8" />
        </Button>
        <span className="text-white text-sm">12.3K</span>
      </div>

      <div className="flex flex-col items-center">
        <Button variant="ghost" size="icon" className="text-white h-12 w-12">
          <Share2 className="h-8 w-8" />
        </Button>
        <span className="text-white text-sm">Udostępnij</span>
      </div>

      <div className="flex flex-col items-center">
        <Button variant="ghost" size="icon" className="text-white h-12 w-12">
          <DollarSign className="h-8 w-8" />
        </Button>
        <span className="text-white text-sm">Wesprzyj</span>
      </div>
    </aside>
  );
};

export default Sidebar;
