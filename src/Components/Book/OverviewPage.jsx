import React from 'react';
import ExpandableImage from './ExpandableImage';
import PageHint from './PageHint';
import './styles/overview.css';

const OverviewPage = React.forwardRef(({ project, page, onExpand }, ref) => (
  <div className={`page ${page.pageClassName || ''}`} style={page.pageStyle} ref={ref}>
    <div className="page-content project">
      <h2>{project.title}</h2>
      {page.role && <p className="project-role">{page.role}</p>}

      <div className="page-scroll">
        {page.image && (
          <figure className="content-image">
            <ExpandableImage src={page.image} alt={project.title} onExpand={onExpand} />
          </figure>
        )}
        <p className="project-description">{page.description}</p>
      </div>

      <div className="page-footer">
        {page.links?.length > 0 && (
          <div className="project-links">
            {page.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </div>
        )}
        {page.tech?.length > 0 && (
          <ul className="project-tech">
            {page.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
        )}
      </div>
    </div>
    <PageHint />
  </div>
));

export default OverviewPage;