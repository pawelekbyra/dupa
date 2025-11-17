import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <button className="profileButton">
          <img src="https://i.pravatar.cc/100" alt="Profile" />
        </button>
        <div className="plus">+</div>
      </div>
      <button className="icon-button like-button">
        {/* Heart SVG */}
        <span className="icon-label">1.2M</span>
      </button>
      <button className="icon-button comment-button">
        {/* Comment SVG */}
        <span className="icon-label">4.5K</span>
      </button>
      <button className="icon-button tipButton">
        {/* Tip SVG */}
        <span className="icon-label">Tip</span>
      </button>
      <button className="icon-button share-button">
        {/* Share SVG */}
        <span className="icon-label">Share</span>
      </button>
    </div>
  );
};

export default Sidebar;
