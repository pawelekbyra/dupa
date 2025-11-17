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
            <button className="rounded-full p-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600">
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
          className="rounded px-4 py-2 text-base font-semibold hover:bg-gray-800 sm:text-lg text-center"
          onClick={() => setActiveModal('login')}
        >
          Nie masz psychy sie zalogowac
        </button>
      </div>

      {/* Right Section */}
      <div className="flex w-1/3 justify-end">
        <button className="relative rounded-full p-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600">
          <Bell size={24} />
          <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></div>
        </button>
      </div>
    </header>
  );
}
