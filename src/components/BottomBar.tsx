'use client';

import React from 'react';

const BottomBar = ({ slide, progress }: { slide: any; progress: number }) => {
  return (
    <div className="bottombar">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        <div className="progress-bar-handle" style={{ left: `${progress}%` }}></div>
      </div>
      <div className="text-info">
        <div className="slide-meta-line">
          <strong className="author-name">{slide.author.name}</strong>
          <span className="slide-title">{slide.title}</span>
        </div>
        <p className="slide-description">{slide.description}</p>
      </div>
    </div>
  );
};

export default BottomBar;
