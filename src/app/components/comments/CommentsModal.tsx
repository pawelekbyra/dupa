// src/app/components/comments/CommentsModal.tsx
"use client";

import { SocialCommentSection, ReplykeConfig } from "@replyke/comments-social-react-js";

// Definicja typów dla użytkownika i propsów
interface User {
  userId: string;
  userName: string;
  userAvatar?: string;
  userEmail?: string;
}

interface CommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  user: User | null; // Użytkownik może być niezalogowany
}

const replykeConfig: ReplykeConfig = {
  apiKey: "610727ec9c9ddf2f50c33c21c72573c002e860943fb1d21780a081a922c1b09c",
  host: "https://api.replyke.com",
};

const CommentsModal = ({ isOpen, onClose, videoId, user }: CommentsModalProps) => {
  return (
    <div
      id="fastcomments-modal-container"
      className={`modal-overlay ${isOpen ? "visible" : ""}`}
      onClick={onClose}
      style={{ visibility: isOpen ? 'visible' : 'hidden' }} // Kontrola widoczności dla accessibility
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Komentarze</h2>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {isOpen && ( // Renderuj komponent Replyke tylko gdy modal jest otwarty
            <SocialCommentSection
              articleId={videoId}
              config={replykeConfig}
              user={user}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
