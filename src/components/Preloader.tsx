// src/components/Preloader.tsx
import React from 'react';
import Image from 'next/image';

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="preloader-icon-container">
        <Image
          src="/jajk.png" // Assuming the image is in the public directory
          alt="Logo aplikacji"
          width={160}
          height={160}
          className="splash-icon"
        />
      </div>
      <div className="preloader-content-container">
        <div className="language-selection">
          <h2>Wybierz Język / Select Language</h2>
          <div className="lang-buttons-container">
            <button data-lang="pl"><span>Polski</span></button>
            <button data-lang="en"><span>English</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
