"use client";

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

// Na razie ten komponent będzie kontrolowany z zewnątrz
// przez Zustand, więc przyjmuje propsy `open` i `onOpenChange`.

interface LoginPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginPanel({ open, onOpenChange }: LoginPanelProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" />
        <Dialog.Content className="fixed top-0 left-0 z-50 w-full max-h-screen overflow-y-auto bg-gray-900 p-6 text-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top">
          <Dialog.Title className="text-lg font-medium">Zaloguj się</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-400">
            Wpisz swoje dane, aby kontynuować.
          </Dialog.Description>

          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 p-2 text-white focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label htmlFor="password"className="block text-sm font-medium text-gray-300">Hasło</label>
              <input type="password" id="password" className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 p-2 text-white focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <button type="submit" className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
              Zaloguj
            </button>
          </form>

          <Dialog.Close asChild>
            <button aria-label="Close" className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100">
              <X className="h-4 w-4" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
