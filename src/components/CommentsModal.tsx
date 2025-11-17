'use client';

import React from 'react';
import useUIStore from '@/lib/useUI';

const CommentsModal = () => {
  const { isCommentsModalOpen, closeCommentsModal } = useUIStore();

  if (!isCommentsModalOpen) return null;

  return (
    <div id="fastcomments-modal-container" className="modal-overlay visible" role="dialog" aria-modal="true" aria-hidden="false">
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="commentsModalTitle" data-translate-key="commentsModalTitle">Komentarze</h2>
          <button className="modal-close-btn" data-action="close-modal" onClick={closeCommentsModal}>&times;</button>
        </div>
        <div className="modal-body">
          <div id="fastcomments-widget-0"></div>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
