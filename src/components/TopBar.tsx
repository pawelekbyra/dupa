"use client";

import { useState } from 'react';
import clsx from 'clsx';

const TopBar = () => {
  const [isLoginPanelVisible, setIsLoginPanelVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleLoginPanel = () => setIsLoginPanelVisible(!isLoginPanelVisible);
  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  return (
    <>
      <div className={clsx(
        "topbar",
        "absolute top-0 left-0 w-full h-[var(--topbar-height)] flex justify-center items-center bg-primary text-text-primary z-50"
      )}>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
            className="stroke-white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
        </button>
        <button className="flex justify-center" onClick={toggleLoginPanel}>
          <div className="relative">
            <span className="text-base font-semibold">Ting Tong</span>
          </div>
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
          aria-label="Powiadomienia"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            aria-hidden="true"
            className="stroke-white"
            fill="none"
          >
            <path
              d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M13.73 21a2 2 0 0 1-3.46 0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent rounded-full border-2 border-white"></div>
        </button>
      </div>
      {isLoginPanelVisible && (
        <div className="absolute top-[var(--topbar-height)] left-0 w-full bg-secondary bg-opacity-80 backdrop-blur-lg z-40 p-4">
          {/* Login Panel Content */}
        </div>
      )}
      {isMenuVisible && (
        <div className="absolute top-[var(--topbar-height)] left-0 bg-secondary bg-opacity-85 backdrop-blur-lg z-40 rounded-br-xl">
          {/* Menu Content */}
        </div>
      )}
    </>
  );
};

export default TopBar;
