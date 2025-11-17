'use client';

import React from 'react';
import useUIStore from '@/lib/useUI';

const FirstLoginModal = () => {
  const { isFirstLoginModalOpen, closeFirstLoginModal } = useUIStore();

  if (!isFirstLoginModalOpen) return null;

  return (
    <div id="firstLoginModal" className="fl-modal-overlay visible" role="dialog" aria-modal="true" aria-hidden="false">
      <div className="fl-modal-content-wrapper">
        <form id="firstLoginForm" className="fl-modal-content">
          <div className="fl-header">
            <div className="fl-drag-handle-container">
              <div className="fl-drag-handle"></div>
            </div>
            <h2 id="flTitle" className="fl-title" data-translate-key="firstLoginTitle">Uzupełnij profil</h2>
            <div className="fl-progress-bar-container">
              <div className="fl-progress-bar-fill" id="flProgressBar"></div>
            </div>
          </div>
          <div className="fl-body" id="flBody">
            <div className="fl-step active" data-step="0">
              <p className="fl-step-description" data-translate-key="firstLoginStep1Desc">Zgody i preferencje.</p>
              <div className="fl-fields-container">
                <label className="fl-preference-row">
                  <span className="fl-preference-label" data-translate-key="firstLoginConsentLabel">Zgoda na maile</span>
                  <input type="checkbox" id="flEmailConsent" className="fl-checkbox" />
                </label>
                <div id="flLanguageOptions" className="fl-language-selector visible">
                  <button type="button" className="fl-language-option active" data-lang="pl" data-translate-key="emailLangPolish">Polski</button>
                  <button type="button" className="fl-language-option" data-lang="en" data-translate-key="emailLangEnglish">English</button>
                </div>
              </div>
            </div>
          </div>
          <div className="fl-footer">
            <div className="fl-footer-buttons">
              <button type="button" id="flPrevBtn" className="fl-btn fl-btn-prev" data-translate-key="firstLoginPrev" onClick={closeFirstLoginModal}>Wstecz</button>
              <button type="button" id="flNextBtn" className="fl-btn fl-btn-next" data-translate-key="firstLoginNext">Dalej</button>
              <button type="submit" id="flSubmitBtn" className="fl-btn fl-btn-submit" data-translate-key="firstLoginSubmit">Zakończ</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FirstLoginModal;
