"use client";

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

export default function UserMenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Menu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <Button variant="ghost" className="w-full justify-start">Konto</Button>
          <Button variant="ghost" className="w-full justify-start">Wyloguj</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
