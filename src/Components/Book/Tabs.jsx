import { CATEGORY_COLORS } from './constants';
import './styles/tabs.css';

export default function Tabs({ groupedTabs, currentPage, onSelectCategory }) {
  // In landscape/two-page mode, both the left page (currentPage) and the
  // right page (currentPage + 1) are visible at once — a tab should be
  // active if either visible page belongs to that category.
  const visiblePages = [currentPage, currentPage + 1];

  return (
    <div className="book-tabs">
      {groupedTabs.map(({ category, items }) => {
        const isActive = items.some(({ startIndex, endIndex }) =>
          visiblePages.some((p) => p >= startIndex && p <= endIndex)
        );
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