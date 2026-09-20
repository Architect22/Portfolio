import React from 'react';
import ExpandableImage from './ExpandableImage';
import PageHint from './PageHint';
import './styles/split.css';

const SplitPage = React.forwardRef(({ page, onExpand }, ref) => (
  <div className={`page ${page.pageClassName || ''}`} style={page.pageStyle} ref={ref}>
    <div className="page-content split">
      {page.heading && <h2 className="split-heading">{page.heading}</h2>}

      <div className="page-scroll">
        <div className="split-row">
          <div className="split-text">
            {page.paragraphs?.map((p, i) => (
              <p key={i} className="content-text">{p}</p>
            ))}
          </div>
          <div className="split-image">
            {page.image ? (
              <ExpandableImage src={page.image} alt={page.imageAlt} onExpand={onExpand} />
            ) : (
              <svg viewBox="0 0 100 100" className="split-image-placeholder">
                <rect x="2" y="2" width="96" height="96" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="2" y1="2" x2="98" y2="98" stroke="currentColor" strokeWidth="1.5" />
                <line x1="98" y1="2" x2="2" y2="98" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {page.link && (
        <div className="page-footer">
          <div className="project-links">
            <a href={page.link.url} target="_blank" rel="noreferrer">{page.link.label}</a>
          </div>
        </div>
      )}
    </div>
    <PageHint />
  </div>
));

export default SplitPage;