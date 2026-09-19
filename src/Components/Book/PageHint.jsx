import React from 'react';
import './styles/page-base.css'; // hints live alongside base page styles

export default function PageHint({ isCover }) {
  return (
    <>
      {!isCover && <span className="page-hint page-hint-left">← back</span>}
      <span className="page-hint page-hint-right">
        {isCover ? 'open the book →' : 'turn page →'}
      </span>
    </>
  );
}