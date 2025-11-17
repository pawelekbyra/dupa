'use client';

import React from 'react';

const TopBar = () => {
  return (
    <div className="topbar">
      <button className="topbar-icon-btn hamburger-icon">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div className="central-text-wrapper with-arrow">
        <span className="topbar-text">Gość</span>
      </div>
      <button className="topbar-icon-btn notification-bell">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        <div className="notification-dot"></div>
      </button>
    </div>
  );
};

export default TopBar;
