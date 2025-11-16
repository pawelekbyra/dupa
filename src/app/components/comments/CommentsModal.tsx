// src/app/components/comments/CommentsModal.tsx
"use client";

import { SocialCommentSection } from "@replyke/comments-social-react-js";

interface CommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

const CommentsModal = ({ isOpen, onClose, videoId }: CommentsModalProps) => {
  return (
    <div
      id="fastcomments-modal-container"
      className={`modal-overlay ${isOpen ? "visible" : ""}`}
      onClick={onClose}
      style={{ visibility: isOpen ? 'visible' : 'hidden' }}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Komentarze</h2>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {isOpen && (
            <SocialCommentSection
              entityId={videoId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
