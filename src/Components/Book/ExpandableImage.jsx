import React, { useRef, useEffect } from 'react';
import './styles/image.css';

export default function ExpandableImage({ src, alt, onExpand }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    // Native listeners (not React synthetic) so we intercept BEFORE
    // page-flip's own drag/gesture listener sees the event.
    const stop = (e) => e.stopPropagation();
    const events = ['mousedown', 'pointerdown', 'touchstart'];
    events.forEach((evt) => btn.addEventListener(evt, stop));

    return () => events.forEach((evt) => btn.removeEventListener(evt, stop));
  }, []);

  return (
    <div className="expandable-image">
      <img src={src} alt={alt || ''} />
      <button
        ref={btnRef}
        className="expand-btn"
        onClick={() => onExpand({ src, alt })}
        title="View larger"
        aria-label="View larger image"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      </button>
    </div>
  );
}