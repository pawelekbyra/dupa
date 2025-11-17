'use client';

import React from 'react';

interface CommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommentsModal: React.FC<CommentsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Komentarze</h2>
          <button className="modal-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {/* Comments will be displayed here */}
          <p>Brak komentarzy.</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
