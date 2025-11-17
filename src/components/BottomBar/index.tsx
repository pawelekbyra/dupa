'use client';

import React from 'react';

interface Slide {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  title: string;
  description: string;
  videoUrl: string;
  likes: string;
  comments: string;
}

interface BottomBarProps {
  slide: Slide;
}

const BottomBar: React.FC<BottomBarProps> = ({ slide }) => {
  return (
    <div className="bottombar">
      <div className="text-info">
        <div className="slide-meta-line">
          <strong className="author-name">{slide.author.name}</strong>
          <span className="slide-title">{slide.title}</span>
        </div>
        <div className="slide-description">
          {slide.description}
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
