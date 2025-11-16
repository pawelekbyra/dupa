// src/app/components/Sidebar.tsx
"use client";

import { useState } from "react";
import CommentsModal from "./comments/CommentsModal";

interface User {
  userId: string;
  userName: string;
  userAvatar?: string;
}

interface SidebarProps {
  videoId: string;
  user: User | null;
}

const Sidebar = ({ videoId, user }: SidebarProps) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const isLoggedIn = !!user;
  const likeCount = 123;
  const commentCount = 45;

  return (
    <>
      <div className="sidebar visible">
        <div className="profile">
          <button className="profileButton" aria-label="Profil autora">
            <img src={user?.userAvatar || "https://i.pravatar.cc/150"} alt="Profil" />
          </button>
          {!isLoggedIn && <div className="plus" aria-hidden="true">+</div>}
        </div>
        <button className="icon-button like-button" aria-label="Polub">
          <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
          <div className="like-count icon-label">{likeCount}</div>
        </button>
        <button className="icon-button commentsButton" aria-label="Komentarze" onClick={() => setIsCommentsOpen(true)}>
          <svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /></svg>
          <div className="icon-label comment-count">{commentCount}</div>
        </button>
        <button className="icon-button shareButton" aria-label="Udostępnij">
          <svg viewBox="0 0 24 24"><path d="M15 5l6 6-6 6M21 11H9a6 6 0 0 0-6 6" /></svg>
          <div className="icon-label">Szeruj</div>
        </button>
        <button className="icon-button tipButton" aria-label="Postaw napiwek">
          <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="12" rx="2" ry="2" /><path d="M2 10h20" /><circle cx="18" cy="13" r="2" /></svg>
          <div className="icon-label">Napiwek</div>
        </button>
      </div>
      <CommentsModal
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        videoId={videoId}
      />
    </>
  );
};

export default Sidebar;
