import React from 'react';

const TopBar = () => {
  return (
    <div className="topbar">
      <button className="topbar-icon-btn hamburger-icon">
        {/* Hamburger SVG */}
      </button>
      <div className="topbar-central-trigger">
        <div className="central-text-wrapper with-arrow">
          <span className="topbar-text">For You</span>
        </div>
      </div>
      <button className="top-bar-icon-btn notification-bell">
        {/* Bell SVG */}
      </button>
    </div>
  );
};

export default TopBar;
