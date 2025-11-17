// src/components/BottomBar.tsx
import React from 'react';

const BottomBar = () => {
  return (
    <div className="bottombar">
      <div className="progress-bar">
        <div className="progress-bar-fill"></div>
        <div className="progress-bar-handle"></div>
      </div>
      <div className="text-info">
        <div className="slide-meta-line">
          <strong className="author-name"></strong>
          <span className="slide-title"></span>
        </div>
        <p className="slide-description"></p>
      </div>
    </div>
  );
};

export default BottomBar;
