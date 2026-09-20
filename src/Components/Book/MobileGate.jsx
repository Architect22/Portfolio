import React, { useState, useEffect } from 'react';
import Book from './Book.jsx';
import './styles/mobile-gate.css';

const MOBILE_BREAKPOINT = 640;

function MobileGate() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= MOBILE_BREAKPOINT : false
  );
  const [forceView, setForceView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile && !forceView) {
    return (
      <div className="mobile-gate">
        <p>This portfolio is best experienced in a web browser.</p>
        <button className="mobile-gate-button" onClick={() => setForceView(true)}>
          View anyway
        </button>
      </div>
    );
  }

  return <Book />;
}

export default MobileGate;