"use client";

import { useState } from "react";

type FirstLoginModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const FirstLoginModal = ({ isVisible, onClose }: FirstLoginModalProps) => {
  const [step, setStep] = useState(0);
  const [emailConsent, setEmailConsent] = useState(false);
  const [language, setLanguage] = useState("pl");

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      id="firstLoginModal"
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-start justify-center z-[10020] transition-opacity duration-300 ease-out pt-[var(--topbar-height)] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isVisible}
    >
      <div className="w-full h-auto flex items-start justify-center p-5">
        <form
          id="firstLoginForm"
          className="bg-gradient-to-b from-[#242426] to-[#18181a] rounded-3xl flex flex-col h-auto max-h-[calc(100vh-80px)] w-full max-w-lg"
        >
          <div className="p-4">
            <div className="pb-3 flex justify-center">
              <div className="w-10 h-1.5 bg-[#48484a] rounded-full"></div>
            </div>
            <h2 id="flTitle" className="text-white text-center text-2xl font-bold mb-4">
              Uzupełnij profil
            </h2>
            <div className="h-1.5 bg-white bg-opacity-10 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-width duration-400 ease-in-out"
                id="flProgressBar"
                style={{ width: `${((step + 1) / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="px-6 pb-5 overflow-y-auto">
            {step === 0 && (
              <div>
                <p>Zgody i preferencje.</p>
                <label>
                  <input
                    type="checkbox"
                    checked={emailConsent}
                    onChange={(e) => setEmailConsent(e.target.checked)}
                  />
                  Zgoda na maile
                </label>
                <div>
                  <button type="button" onClick={() => setLanguage("pl")}>
                    Polski
                  </button>
                  <button type="button" onClick={() => setLanguage("en")}>
                    English
                  </button>
                </div>
              </div>
            )}
            {step === 1 && <div>Step 2 content</div>}
            {step === 2 && <div>Step 3 content</div>}
          </div>

          <div className="p-4 bg-[#18181a] border-t border-white border-opacity-10">
            <div className="flex gap-3">
              {step > 0 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex-1 py-4 bg-[#3a3a3c] text-white rounded-2xl text-base font-bold"
                >
                  Wstecz
                </button>
              )}
              {step < 2 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl text-base font-bold shadow-lg"
                >
                  Dalej
                </button>
              )}
              {step === 2 && (
                <button
                  type="submit"
                  className="flex-1 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl text-base font-bold shadow-lg"
                >
                  Zakończ
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FirstLoginModal;
