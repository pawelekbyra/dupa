"use client";

import React from 'react';
import { Menu, Bell } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import { useStore } from '@/lib/store';

export default function TopBar() {
  const { setActiveModal } = useStore();

  return (
    <header className="flex h-[var(--topbar-height)] w-full items-center justify-between bg-black px-4 pt-[var(--safe-area-top)] text-white flex-shrink-0">

      {/* Left Section */}
      <div className="flex w-1/3 justify-start">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button className="bg-transparent hover:bg-white/10 p-2 rounded-full">
              <Menu size={24} />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              sideOffset={5}
              className="z-50 w-48 rounded-md border border-gray-700 bg-gray-900 p-2 text-white shadow-md"
            >
              <button
                className="block w-full rounded px-4 py-2 text-left text-sm hover:bg-gray-800"
                onClick={() => setActiveModal('account')}
              >
                Konto
              </button>
              <button className="block w-full rounded px-4 py-2 text-left text-sm hover:bg-gray-800">
                Wyloguj
              </button>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>

      {/* Center Section */}
      <div className="flex w-1/3 justify-center">
        <button
          className="text-base font-semibold sm:text-lg text-center"
          onClick={() => setActiveModal('login')}
        >
          Nie masz psychy sie zalogowac
        </button>
      </div>

      {/* Right Section */}
      <div className="flex w-1/3 justify-end">
        <button className="relative bg-transparent hover:bg-white/10 p-2 rounded-full">
          <Bell size={24} />
          <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></div>
        </button>
      </div>
    </header>
  );
}
