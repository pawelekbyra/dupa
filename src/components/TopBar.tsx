// src/components/TopBar.tsx
import React from 'react';

const TopBar = () => {
  return (
    <header className="topbar" data-view="default">
      <button className="topbar-icon-btn hamburger-icon" data-action="toggle-main-menu" aria-label="Menu">
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>
      </button>
      <button className="topbar-central-trigger" data-action="toggle-login-panel">
        <div className="central-text-wrapper">
          <span className="topbar-text"></span>
        </div>
      </button>
      <button className="topbar-icon-btn notification-bell" data-action="toggle-notifications" aria-label="Powiadomienia">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <div className="notification-dot"></div>
      </button>
    </header>
  );
};

export default TopBar;
