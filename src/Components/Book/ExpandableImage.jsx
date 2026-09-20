import React, { useRef, useEffect } from 'react';
import './styles/image.css';

export default function ExpandableImage({ src, alt, onExpand }) {
  const btnRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Only block the events that page-flip uses to START a drag/flip
    // gesture. Deliberately NOT including 'click' — React's onClick is
    // attached at the root via event delegation, so stopping propagation
    // on click here would prevent it from ever reaching React at all.
    const stop = (e) => e.stopPropagation();
    const events = ['mousedown', 'pointerdown', 'touchstart'];

    const btn = btnRef.current;
    const img = imgRef.current;

    if (btn) events.forEach((evt) => btn.addEventListener(evt, stop));
    if (img) events.forEach((evt) => img.addEventListener(evt, stop));

    return () => {
      if (btn) events.forEach((evt) => btn.removeEventListener(evt, stop));
      if (img) events.forEach((evt) => img.removeEventListener(evt, stop));
    };
  }, []);

  return (
    <div className="expandable-image">
      <img
        ref={imgRef}
        src={src}
        alt={alt || ''}
        onClick={() => onExpand({ src, alt })}
        className="expandable-image-img"
      />
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