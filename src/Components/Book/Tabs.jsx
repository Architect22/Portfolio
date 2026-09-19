import React from 'react';
import { CATEGORY_COLORS } from './constants';
import './styles/tabs.css';

export default function Tabs({ groupedTabs, currentPage, onSelectCategory }) {
  return (
    <div className="book-tabs">
      {groupedTabs.map(({ category, items }) => {
        const isActive =
          currentPage >= items[0].startIndex &&
          currentPage <= items[items.length - 1].endIndex;
        const palette = CATEGORY_COLORS[category] || CATEGORY_COLORS.Other;
        return (
          <button
            key={category}
            className={`book-tab ${isActive ? 'active' : ''}`}
            style={{ background: palette[0] }}
            onClick={() => onSelectCategory(items[0].startIndex)}
            title={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}