'use client';

import React from 'react';
import TopBar from './TopBar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <TopBar />
      <main className="flex-1 h-full w-full relative">{children}</main>
    </div>
  );
};

export default AppLayout;
