"use client";

import React from 'react';
import * as Popover from '@radix-ui/react-popover';

interface LoginAccountPopoverProps {
  onProfileClick: () => void;
}

const LoginAccountPopover: React.FC<LoginAccountPopoverProps> = ({ onProfileClick }) => {
  // TODO: Implement logout functionality
  const handleLogoutClick = () => console.log('Logout clicked');

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="text-lg font-bold text-text-primary">
          nie masz psychy sie zalogowac
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={5}
          className="w-[200px] rounded-lg bg-[#2C2C2C] p-2 text-text-primary shadow-lg"
        >
          <div className="flex flex-col gap-1">
            <button
              onClick={onProfileClick}
              className="w-full text-left px-3 py-2 text-base rounded hover:bg-accent"
            >
              Mój Profil
            </button>
            <button
              onClick={handleLogoutClick}
              className="w-full text-left px-3 py-2 text-base rounded hover:bg-accent"
            >
              Wyloguj
            </button>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default LoginAccountPopover;
