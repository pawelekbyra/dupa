import React from 'react';

const CommentsModal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div id="fastcomments-modal-container" className="modal-overlay visible">
      <div className="modal-content">
        {/* Comments content will go here */}
      </div>
    </div>
  );
};

export default CommentsModal;
