import React from 'react';
import './styles/image.css';

export default function Lightbox({ image, onClose }) {
  if (!image) return null;
  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
      <img className="lightbox-image" src={image.src} alt={image.alt || ''} onClick={onClose} />
    </div>
  );
}