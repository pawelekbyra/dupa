"use client";

import React, { useState } from 'react';

const LoginModal = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;
  const [formData, setFormData] = useState({
    email_consent: true,
    email_language: 'pl',
    first_name: '',
    last_name: '',
    new_password: '',
    confirm_password: ''
  });

  if (!isVisible) {
    return null;
  }

  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose();
  };

  return (
    <div className="fl-modal-overlay visible">
      <div className="fl-modal-content-wrapper">
        <form className="fl-modal-content" onSubmit={handleFormSubmit}>
          <div className="fl-header">
            <div className="fl-drag-handle-container">
              <div className="fl-drag-handle"></div>
            </div>
            <h2 className="fl-title">Zaloguj się</h2>
            <div className="fl-progress-bar-container">
              <div
                className="fl-progress-bar-fill"
                style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="fl-body">
            {currentStep === 0 && (
              <div className="fl-step active">
                <div className="fl-preference-row">
                  <label htmlFor="flEmailConsent" className="fl-preference-label">Zgoda na email</label>
                  <input type="checkbox" id="flEmailConsent" name="email_consent" checked={formData.email_consent} onChange={handleInputChange} className="fl-checkbox" />
                </div>
                <div className={`fl-language-selector ${formData.email_consent ? 'visible' : ''}`}>
                  <button type="button" className={`fl-language-option ${formData.email_language === 'pl' ? 'active' : ''}`} onClick={() => setFormData({...formData, email_language: 'pl'})}>PL</button>
                  <button type="button" className={`fl-language-option ${formData.email_language === 'en' ? 'active' : ''}`} onClick={() => setFormData({...formData, email_language: 'en'})}>EN</button>
                </div>
              </div>
            )}
            {currentStep === 1 && (
              <div className="fl-step active">
                <div className="fl-fields-container">
                  <input type="text" name="first_name" placeholder="Imię" value={formData.first_name} onChange={handleInputChange} className="fl-input" />
                  <input type="text" name="last_name" placeholder="Nazwisko" value={formData.last_name} onChange={handleInputChange} className="fl-input" />
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="fl-step active">
                <div className="fl-fields-container">
                  <input type="password" name="new_password" placeholder="Hasło" value={formData.new_password} onChange={handleInputChange} className="fl-input" />
                  <input type="password" name="confirm_password" placeholder="Potwierdź hasło" value={formData.confirm_password} onChange={handleInputChange} className="fl-input" />
                </div>
              </div>
            )}
          </div>
          <div className="fl-footer">
            <div className="fl-footer-buttons">
              {currentStep > 0 && (
                <button type="button" className="fl-btn fl-btn-prev" onClick={handlePrevStep} style={{ display: 'inline-flex' }}>
                  Wstecz
                </button>
              )}
              {currentStep < totalSteps - 1 && (
                <button type="button" className="fl-btn fl-btn-next" onClick={handleNextStep} style={{ display: 'inline-flex' }}>
                  Dalej
                </button>
              )}
              {currentStep === totalSteps - 1 && (
                <button type="submit" className="fl-btn fl-btn-submit" style={{ display: 'inline-flex' }}>
                  Zaloguj
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
