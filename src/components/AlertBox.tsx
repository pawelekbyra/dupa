// src/components/AlertBox.tsx
import React from 'react';

const AlertBox = () => {
  return (
    <div id="alertBox" role="status" aria-live="polite">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{ width: '18px', height: '18px', stroke: 'white', strokeWidth: 2, fill: 'none', marginRight: '6px' }}>
        <path d="M6 10V8a6 6 0 1 1 12 0v2" />
        <rect x="4" y="10" width="16" height="10" rx="2" ry="2" />
      </svg>
      <span id="alertText"></span>
    </div>
  );
};

export default AlertBox;
