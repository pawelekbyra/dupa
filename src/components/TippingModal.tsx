"use client";

import { useState } from "react";

type TippingModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const TippingModal = ({ isVisible, onClose }: TippingModalProps) => {
  const [step, setStep] = useState(0);
  const [showEmail, setShowEmail] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      id="tippingModal"
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-[10200] transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isVisible}
    >
      <div className="w-full h-full flex items-center justify-center p-5">
        <form
          id="tippingForm"
          className="bg-gradient-to-b from-[#28282a] to-[#1c1c1e] text-[#f0f0f0] rounded-2xl w-[90%] max-w-md max-h-[85vh] flex flex-col border border-white border-opacity-10 shadow-lg"
        >
          <div className="p-5 text-center relative">
            <h2 id="tippingTitle" className="text-xl font-semibold mb-2">
              Bramka Napiwkowa
            </h2>
            <button
              type="button"
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-none border-none text-2xl cursor-pointer text-white opacity-70 hover:opacity-100"
              onClick={onClose}
              aria-label="Close tipping modal"
            >
              &times;
            </button>
            <div className="h-1.5 bg-white bg-opacity-10 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-width duration-500 ease-in-out"
                id="tippingProgressBar"
                style={{ width: `${(step + 1) * 25}%` }}
              ></div>
            </div>
          </div>

          <div className="px-6 pb-5 overflow-y-auto">
            {step === 0 && (
              <div>
                <p>Założyć konto Patrona? 🏆</p>
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => setShowEmail(e.target.checked)}
                  />
                  No raczej!
                </label>
                {showEmail && (
                  <input
                    type="email"
                    placeholder="(podaj mail na ktory otrzymasz klucze logowania)"
                  />
                )}
              </div>
            )}
            {step === 1 && <div>Step 2 content</div>}
            {step === 2 && <div>Step 3 content</div>}
            {step === 3 && <div>Step 4 content</div>}
          </div>

          <div className="p-4 border-t border-white border-opacity-10">
            <div className="flex gap-3">
              {step > 0 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex-1 py-3.5 border border-gray-600 rounded-xl text-sm font-semibold text-gray-400 bg-transparent"
                >
                  Wstecz
                </button>
              )}
              {step < 3 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 py-3.5 bg-accent rounded-xl text-sm font-semibold text-white"
                >
                  ENTER
                </button>
              )}
              {step === 3 && (
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-success rounded-xl text-sm font-semibold text-white"
                >
                  ENTER!
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TippingModal;
