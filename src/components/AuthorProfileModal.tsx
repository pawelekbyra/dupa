'use client';

import React from 'react';
import useUIStore from '@/lib/useUI';

const AuthorProfileModal = () => {
  const { isAuthorProfileModalOpen, closeAuthorProfileModal } = useUIStore();

  if (!isAuthorProfileModalOpen) return null;

  return (
    <div id="author-profile-modal" className="profile-modal-overlay visible" role="dialog" aria-modal="true" aria-labelledby="author-profile-title" aria-hidden="false">
      <div className="profile-modal-content">
        <header className="profile-header">
          <h2 id="author-profile-title" className="username-header"></h2>
          <button className="modal-close-btn" data-action="close-author-profile" aria-label="Close profile" onClick={closeAuthorProfileModal}>
            &times;
          </button>
        </header>
        <main>
          <section className="info-section">
            <div className="avatar-container">
              <img src="" alt="User Avatar" className="profile-avatar" />
            </div>
          </section>
          <p className="fullname"></p>
          <p className="bio"></p>
          <div className="stats-container">
            <div className="stat">
              <span className="stat-number following-count">0</span>
              <span className="stat-label" data-translate-key="profileFollowing">Following</span>
            </div>
            <div className="stat">
              <span className="stat-number followers-count">0</span>
              <span className="stat-label" data-translate-key="profileFollowers">Followers</span>
            </div>
            <div className="stat">
              <span className="stat-number likes-count">0</span>
              <span className="stat-label" data-translate-key="profileLikes">Likes</span>
            </div>
          </div>
          <div className="profile-actions">
            <button className="follow-btn" data-action="show-tip-jar">
              <span data-translate-key="crowdfundingCtaButton">Zostań Patronem</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="7" width="20" height="12" rx="2" ry="2" /><path d="M2 10h20" /><circle cx="18" cy="13" r="2" /></svg>
            </button>
            <button className="social-btn instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </button>
            <button className="social-btn youtube" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </button>
          </div>
          <div className="profile-tabs">
            <button className="profile-tab active" data-tab="videos-grid" data-action="switch-profile-tab">
              <svg viewBox="0 0 24 24"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"></path></svg>
            </button>
            <button className="profile-tab" data-tab="reposts-grid" data-action="switch-profile-tab">
              <svg viewBox="0 0 24 24"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
            </button>
            <button className="profile-tab" data-tab="liked-grid" data-action="switch-profile-tab">
              <svg viewBox="0 0 24 24"><path d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg>
            </button>
          </div>
          <div className="profile-tab-content">
            <div id="videos-grid" className="video-gallery active">
              {/* Video thumbnails will be inserted here */}
            </div>
            <div id="reposts-grid" className="video-gallery">
              {/* Reposted video thumbnails will be inserted here */}
            </div>
            <div id="liked-grid" className="video-gallery">
              {/* Liked video thumbnails will be inserted here */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuthorProfileModal;
