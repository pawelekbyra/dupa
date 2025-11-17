// src/components/AppLayout.tsx
import React from 'react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="app-frame">
      {/* TopBar will be added here */}
      <main>{children}</main>
      {/* BottomBar will be added here */}
    </div>
  );
};

export default AppLayout;
