"use client";

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import CommentItem from './CommentItem';
import { X } from 'lucide-react';

interface CommentsModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function CommentsModal({ isOpen, onOpenChange }: CommentsModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/70" />
        <Dialog.Content className="fixed bottom-0 left-0 z-50 h-[60vh] w-full rounded-t-2xl bg-[#1c1c1e] p-4 text-white">
          <Dialog.Title className="text-center text-lg font-bold">Comments</Dialog.Title>
          <div className="mt-4 space-y-4 overflow-y-auto h-[calc(60vh-100px)]">
            <CommentItem />
            <CommentItem />
            <CommentItem />
          </div>
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4">
              <X size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
