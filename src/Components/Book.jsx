import React, { useRef, useState, useMemo } from 'react';
import HTMLFlipBook from 'react-pageflip';
import projects from '../data/projects';
import './BookStyle.css';

// Page objects can now carry `pageClassName` (extra class) and
// `pageStyle` (inline style object) so any single page can override
// layout/background/etc without touching the shared CSS.
const Page = React.forwardRef(({ children, className = '', pageClassName = '', pageStyle }, ref) => (
  <div className={`page ${className} ${pageClassName}`} style={pageStyle} ref={ref}>
    <div className="page-content">{children}</div>
  </div>
));

const CoverPage = React.forwardRef(({ name, tagline, pageClassName = '', pageStyle }, ref) => (
  <div className={`page cover ${pageClassName}`} style={pageStyle} ref={ref}>
    <div className="page-content cover">
      <h1>{name}</h1>
      <p>{tagline}</p>
    </div>
    <span className="open-hint">open the book →</span>
  </div>
));

const OverviewPage = React.forwardRef(({ project, page }, ref) => (
  <div className={`page ${page.pageClassName || ''}`} style={page.pageStyle} ref={ref}>
    <div className="page-content project">
      <h2>{project.title}</h2>
      {page.role && <p className="project-role">{page.role}</p>}
      {page.image && (
        <figure className="content-image">
          <img src={page.image} alt={project.title} />
        </figure>
      )}
      <p className="project-description">{page.description}</p>
      {page.tech?.length > 0 && (
        <ul className="project-tech">
          {page.tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
      )}
      {page.links?.length > 0 && (
        <div className="project-links">
          {page.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
      )}
    </div>
  </div>
));

function Block({ block }) {
  switch (block.type) {
    case 'heading':
      return <h3 className="content-heading">{block.text}</h3>;
    case 'text':
      return <p className="content-text">{block.text}</p>;
    case 'image':
      return (
        <figure className="content-image">
          <img src={block.src} alt={block.alt || ''} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case 'links':
      return (
        <div className="content-links">
          {block.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
      );
    default:
      return null;
  }
}

const CustomPage = React.forwardRef(({ page }, ref) => (
  <div className={`page ${page.pageClassName || ''}`} style={page.pageStyle} ref={ref}>
    <div className="page-content custom">
      {page.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  </div>
));

function renderProjectPage(project, page, key) {
  if (page.type === 'custom') return <CustomPage key={key} page={page} />;
  return <OverviewPage key={key} project={project} page={page} />;
}

const TAB_COLORS = ['#c0392b', '#2d6ea3', '#4a8a3f', '#8e3f9e'];

function Book() {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const { flatPages, projectRanges } = useMemo(() => {
    const flatPages = [];
    const projectRanges = [];
    let cursor = 1;

    projects.forEach((project) => {
      const startIndex = cursor;
      project.pages.forEach((page, i) => {
        flatPages.push(renderProjectPage(project, page, `${project.id}-${i}`));
        cursor += 1;
      });
      const endIndex = cursor - 1;
      projectRanges.push({ startIndex, endIndex, project });
    });

    return { flatPages, projectRanges };
  }, []);

  const lastPageIndex = flatPages.length + 1;
  const isCoverOrBack = currentPage === 0 || currentPage >= lastPageIndex;

  const goToProject = (startIndex) => {
    bookRef.current?.pageFlip()?.flip(startIndex);
  };

  const handleFlip = (e) => {
    setCurrentPage(e.data);
  };

  return (
    <div className="book-stage">
      <div className="book-wrapper">
        <div className="flipbook-shell">
          <HTMLFlipBook
            ref={bookRef}
            width={420}
            height={640}
            minWidth={280}
            maxWidth={560}
            minHeight={420}
            maxHeight={820}
            size="stretch"
            maxShadowOpacity={0.5}
            drawShadow={true}
            showCover={true}
            usePortrait={true}
            mobileScrollSupport={true}
            className="flip-book"
            onFlip={handleFlip}
          >
            <CoverPage name="Ben Brown" tagline="Developer & Storyteller" />

            {flatPages}

            <Page className="back-cover">
              <p>Thanks for reading — see more at linktr.ee/bentombrown</p>
            </Page>
          </HTMLFlipBook>
        </div>

        {!isCoverOrBack && (
          <div className="book-tabs">
            {projectRanges.map(({ startIndex, endIndex, project }, i) => {
              const isActive = currentPage >= startIndex && currentPage <= endIndex;
              return (
                <button
                  key={project.id}
                  className={`book-tab ${isActive ? 'active' : ''}`}
                  style={{ background: TAB_COLORS[i % TAB_COLORS.length] }}
                  onClick={() => goToProject(startIndex)}
                  title={project.title}
                >
                  {project.tabIcon || project.title[0]}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;