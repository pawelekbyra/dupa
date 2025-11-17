import React from 'react';

const BottomBar = () => {
  return (
    <div className="bottombar">
      <div className="text-info">
        <div className="slide-meta-line">
          <a href="#" className="author-name-link">
            <strong className="author-name">@author_name</strong>
          </a>
        </div>
        <h2 className="slide-title">Video Title</h2>
        <p className="slide-description">Video description...</p>
      </div>
    </div>
  );
};

export default BottomBar;
