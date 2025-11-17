'use client';

import React from 'react';
import useUIStore from '@/lib/useUI';

const TippingModal = () => {
  const { isTippingModalOpen, closeTippingModal } = useUIStore();

  if (!isTippingModalOpen) return null;

  return (
    <div id="tippingModal" className="elegant-modal-overlay visible" role="dialog" aria-modal="true" aria-hidden="false">
      <div className="elegant-modal-content-wrapper">
        <form id="tippingForm" className="elegant-modal-content">
          <div className="elegant-modal-header">
            <h2 id="tippingTitle" className="elegant-modal-title" data-translate-key="tippingTitle">Bramka Napiwkowa</h2>
            <button type="button" className="modal-close-btn" data-action="close-modal" aria-label="Close tipping modal" onClick={closeTippingModal}>&times;</button>
            <div className="elegant-modal-progress-bar-container">
              <div className="elegant-modal-progress-bar-fill" id="tippingProgressBar"></div>
            </div>
          </div>

          <div className="elegant-modal-body" id="tippingBody">
            {/* Step 1: Email and consent */}
            <div className="elegant-modal-step active" data-step="0">
              <p className="elegant-modal-step-description" data-translate-key="tippingStep1Desc">Założyć konto Patrona? 🏆</p>
              <div className="elegant-modal-fields-container">
                <label className="elegant-modal-preference-row">
                  <span className="elegant-modal-preference-label" data-translate-key="tippingCreateAccountLabel">No raczej!</span>
                  <input type="checkbox" id="tippingCreateAccount" className="elegant-modal-checkbox" />
                </label>
                <div id="tippingEmailContainer" className="elegant-modal-email-container visible">
                  <input type="email" id="tippingEmail" className="elegant-modal-input" data-translate-placeholder="emailPlaceholder" placeholder="(podaj mail na ktory otrzymasz klucze logowania)" />
                  <p className="elegant-modal-hint-text" data-translate-key="tippingEmailHint">Na podany e-mail otrzymasz dane dostępu do logowania do sekcji dla patronów.</p>
                </div>
                <div id="tippingStep0Error" className="elegant-modal-error"></div>
              </div>
            </div>
          </div>

          <div className="elegant-modal-footer">
            <div className="elegant-modal-footer-buttons">
              <button type="button" id="tippingPrevBtn" className="elegant-modal-btn elegant-modal-btn-prev" data-action="tipping-prev" data-translate-key="tippingPrev">Wstecz</button>
              <button type="button" id="tippingNextBtn" className="elegant-modal-btn elegant-modal-btn-next" data-action="tipping-next" data-translate-key="tippingNext">ENTER</button>
              <button type="submit" id="tippingSubmitBtn" className="elegant-modal-btn elegant-modal-btn-submit" data-translate-key="tippingPay">ENTER!</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TippingModal;
