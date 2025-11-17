"use client";

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface VideoControlModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  controlName: string | null;
}

const VideoControlModal: React.FC<VideoControlModalProps> = ({ open, onOpenChange, controlName }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-nav p-6 rounded-lg shadow-lg z-50 text-text-primary">
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4">
              <X size={24} />
            </button>
          </Dialog.Close>
          <Dialog.Title className="text-lg font-bold">{controlName}</Dialog.Title>
          <div className="mt-4">
            {/* Placeholder content */}
            <p>Details for {controlName} will be displayed here.</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default VideoControlModal;
