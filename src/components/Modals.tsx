// src/components/Modals.tsx
import React from 'react';

export const TippingModal = () => {
  return (
    <div id="tippingModal" className="elegant-modal-overlay" role="dialog" aria-modal="true" aria-hidden="true">
      {/* Tipping Modal Content */}
    </div>
  );
};

export const FirstLoginModal = () => {
  return (
    <div id="firstLoginModal" className="fl-modal-overlay" role="dialog" aria-modal="true" aria-hidden="true">
      {/* First Login Modal Content */}
    </div>
  );
};

export const AuthorProfileModal = () => {
  return (
    <div id="author-profile-modal" className="profile-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="author-profile-title" aria-hidden="true">
      {/* Author Profile Modal Content */}
    </div>
  );
};

export const CommentsModal = () => {
  return (
    <div id="fastcomments-modal-container" className="modal-overlay" role="dialog" aria-modal="true" aria-hidden="true">
      {/* Comments Modal Content */}
    </div>
  );
};

export const VideoPlayerModal = () => {
  return (
    <div id="video-player-modal" className="modal-overlay" style={{ backgroundColor: '#000' }}>
      {/* Video Player Modal Content */}
    </div>
  );
};

export const NotificationPopup = () => {
  return (
    <div className="notification-popup" id="notificationPopup" role="dialog" aria-modal="true" aria-labelledby="notification-title">
      {/* Notification Popup Content */}
    </div>
  );
};

export const AccountModal = () => {
  return (
    <div className="account-modal-overlay" id="accountModal">
      {/* Account Modal Content */}
    </div>
  );
};

export const CropModal = () => {
  return (
    <div className="crop-modal" id="cropModal">
      {/* Crop Modal Content */}
    </div>
  );
};

export const PwaInstallBar = () => {
  return (
    <div id="pwa-install-bar" className="pwa-prompt" aria-hidden="true">
      {/* PWA Install Bar Content */}
    </div>
  );
};

export const PwaIosInstructions = () => {
  return (
    <div id="pwa-ios-instructions" className="pwa-prompt-ios">
      {/* PWA IOS Instructions Content */}
    </div>
  );
};

export const PwaDesktopModal = () => {
  return (
    <div id="pwa-desktop-modal" className="modal-overlay pwa-desktop-mini-modal" role="dialog" aria-modal="true" aria-labelledby="pwa-desktop-title" aria-hidden="true">
      {/* PWA Desktop Modal Content */}
    </div>
  );
};

export const WelcomeModal = () => {
  return (
    <div id="welcome-modal" className="modal-overlay welcome-modal" role="dialog" aria-modal="true" aria-labelledby="welcome-modal-title" aria-hidden="true">
      {/* Welcome Modal Content */}
    </div>
  );
};

export const ImageLightbox = () => {
  return (
    <div className="image-lightbox">
      {/* Image Lightbox Content */}
    </div>
  );
};

export const InfoModal = () => {
  return (
    <div id="infoModal" className="modal-overlay info-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="info-modal-title" aria-hidden="true">
      {/* Info Modal Content */}
    </div>
  );
};
