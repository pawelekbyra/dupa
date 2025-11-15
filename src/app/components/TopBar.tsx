import React from "react";

const TopBar = ({ onToggleLogin }: { onToggleLogin: () => void }) => {
  return (
    <div className="topbar">
      <div className="topbar-central-trigger" onClick={onToggleLogin}>
        <div className="central-text-wrapper with-arrow">
            <span className="topbar-text">Ting Tong</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
