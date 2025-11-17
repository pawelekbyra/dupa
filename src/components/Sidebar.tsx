"use client";

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Home, User, MessageCircle, Settings, Upload, X } from 'lucide-react';

interface SidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onItemClick: (itemName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onOpenChange, onItemClick }) => {
  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: User, label: 'Profile' },
    { icon: MessageCircle, label: 'Messages' },
    { icon: Settings, label: 'Settings' },
    { icon: Upload, label: 'Upload' },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-20" />
        <Dialog.Content className="fixed top-0 left-0 h-full w-[280px] bg-nav p-4 z-30 text-text-secondary">
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4">
              <X size={24} />
            </button>
          </Dialog.Close>
          <div className="mt-12">
            <nav>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => onItemClick(item.label)}
                      className="w-full flex items-center gap-4 p-3 rounded-md hover:bg-accent hover:text-text-primary"
                    >
                      <item.icon size={24} />
                      <span className="text-lg">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Sidebar;
