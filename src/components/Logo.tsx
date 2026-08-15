import React, { useState } from 'react';

interface LogoProps {
  variant?: 'header' | 'footer' | 'compact';
  customImgSrc?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'header', customImgSrc, className = '' }) => {
  const [imgError, setImgError] = useState(false);

  // If a custom logo image path is provided and loaded successfully, render the image
  if (customImgSrc && !imgError) {
    return (
      <a href="#hero" className={`logo-link ${className}`} aria-label="Pharma Excel Home">
        <img
          src={customImgSrc}
          alt="Pharma Excel Logo"
          className={variant === 'footer' ? 'logo-img-footer' : 'logo-img'}
          onError={() => setImgError(true)}
        />
      </a>
    );
  }

  // Recreated Inline Vector & Typography Lockup
  return (
    <a href="#hero" className={`brand-logo-container ${variant} ${className}`} aria-label="Pharma Excel - Home">
      <div className="logo-symbol-wrapper">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-cross-svg"
          aria-hidden="true"
        >
          {/* Subtle container circle */}
          <rect width="44" height="44" rx="10" fill="#F0F4FA" />
          <rect x="1" y="1" width="42" height="42" rx="9" stroke="#1A4F9C" strokeOpacity="0.15" strokeWidth="1.5" />
          
          {/* Stylized Red Medical Cross with Dynamic Energy */}
          <path
            d="M22 8V36M8 22H36"
            stroke="#E63946"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Central Blue Diamond / Dynamic Core Accent */}
          <path
            d="M22 17L27 22L22 27L17 22Z"
            fill="#1A4F9C"
          />
          {/* Subtle ascending growth tick in white */}
          <path
            d="M20 22L21.5 23.5L24.5 20.5"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="logo-text-wrapper">
        <div className="logo-wordmark">
          <span className="word-pharma">Pharma</span>
          <span className="word-excel">
            <span className="char-e">E</span>
            <span className="char-x-wrapper">
              <span className="char-x">x</span>
              <svg className="x-swoosh" viewBox="0 0 24 8" fill="none">
                <path d="M1 5.5C7 8 17 6.5 23 1" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="char-cel">cel</span>
          </span>
        </div>
        <div className="logo-tagline">
          <span>Consultant</span>
          <span className="tagline-sep">›</span>
          <span>Trainer</span>
          <span className="tagline-sep">›</span>
          <span>Recruiter</span>
        </div>
      </div>
    </a>
  );
};
