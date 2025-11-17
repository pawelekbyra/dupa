// src/components/LoggedInMenu.tsx
import React from 'react';

const LoggedInMenu = () => {
  return (
    <div className="logged-in-menu" aria-hidden="true">
      <a href="#" data-action="open-account-modal" className="accountMenuButton">
        Konto
      </a>
      <a href="#" data-action="logout" className="logout-link">
        Wyloguj
      </a>
    </div>
  );
};

export default LoggedInMenu;
