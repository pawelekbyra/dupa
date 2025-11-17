'use client';

import React from 'react';

const NotificationsModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="modal-overlay visible" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Powiadomienia</h2>
        <p>Tutaj będą wyświetlane powiadomienia.</p>
        <button onClick={onClose}>Zamknij</button>
      </div>
    </div>
  );
};

export default NotificationsModal;
