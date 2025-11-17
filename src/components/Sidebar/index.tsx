'use client';

import React, { useState } from 'react';
import CommentsModal from '@/components/Modals/CommentsModal';

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

interface SidebarProps {
  slide: Slide;
}

const Sidebar: React.FC<SidebarProps> = ({ slide }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const openCommentsModal = () => {
    setIsCommentsModalOpen(true);
  };

  const closeCommentsModal = () => {
    setIsCommentsModalOpen(false);
  };

  return (
    <>
      <div className="sidebar">
        <div className="profile">
          <button className="profileButton">
            <img src={slide.author.avatar} alt="User avatar" />
          </button>
          <div className="plus">+</div>
        </div>
        <button className={`icon-button like-button ${isLiked ? 'active' : ''}`} onClick={toggleLike}>
          <svg viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
          <span className="icon-label like-count">{slide.likes}</span>
        </button>
        <button className="icon-button commentsButton" onClick={openCommentsModal}>
          <svg viewBox="0 0 24 24">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span className="icon-label comment-count">{slide.comments}</span>
        </button>
        <button className="icon-button tipButton">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="8"></line>
          </svg>
          <span className="icon-label">Tip</span>
        </button>
      </div>
      <CommentsModal isOpen={isCommentsModalOpen} onClose={closeCommentsModal} />
    </>
  );
};

export default Sidebar;
