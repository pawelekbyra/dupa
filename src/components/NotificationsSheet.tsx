"use client";

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface NotificationsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NotificationsSheet: React.FC<NotificationsSheetProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-20" />
        <Dialog.Content className="fixed top-0 right-0 h-full w-[280px] bg-nav p-4 z-30 text-text-primary">
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4">
              <X size={24} />
            </button>
          </Dialog.Close>
          <Dialog.Title className="text-lg font-bold mt-8">Notifications</Dialog.Title>
          <div className="mt-4">
            {/* Placeholder content */}
            <p>No new notifications.</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NotificationsSheet;
