import React, { useState } from 'react';

const TopBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPanelOpen, setIsLoginPanelOpen] = useState(false);

  return (
    <>
      <div className="topbar" data-view={isLoggedIn ? 'logged-in' : 'default'}>
        <button className="topbar-icon-btn hamburger-icon" aria-label="Menu">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
        </button>
        <button className="topbar-central-trigger" onClick={() => setIsLoginPanelOpen(!isLoginPanelOpen)}>
          <div className="central-text-wrapper">
            <span className="topbar-text">{isLoggedIn ? 'Witaj, Użytkowniku' : 'Ting Tong'}</span>
          </div>
        </button>
        <button className="topbar-icon-btn notification-bell" aria-label="Powiadomienia">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <div className="notification-dot"></div>
        </button>
      </div>
      <div className={`login-panel ${isLoginPanelOpen ? 'visible' : ''}`} aria-hidden={!isLoginPanelOpen}>
        <form id="tt-login-form" className="login-form" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setIsLoginPanelOpen(false); }}>
          <input type="text" id="tt-username" name="log" aria-label="Username" placeholder="Username" />
          <div className="password-wrapper">
            <input type="password" id="tt-password" name="pwd" aria-label="Password" placeholder="Password" />
            <button type="button" className="password-toggle-btn" aria-label="Toggle password visibility">
              {/* Ikony oka SVG */}
            </button>
          </div>
          <button type="submit" id="tt-login-submit">ENTER</button>
        </form>
      </div>
      <div className={`logged-in-menu ${isLoginPanelOpen && isLoggedIn ? 'visible' : ''}`} aria-hidden={!(isLoginPanelOpen && isLoggedIn)}>
        <a href="#" className="accountMenuButton">Konto</a>
        <a href="#" className="logout-link" onClick={() => { setIsLoggedIn(false); setIsLoginPanelOpen(false); }}>Wyloguj</a>
      </div>
    </>
  );
};

export default TopBar;
