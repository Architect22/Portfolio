import React, { useRef, useState, useEffect, useMemo } from 'react';
import HTMLFlipBook from 'react-pageflip';
import projects from '../data/projects';
import './BookStyle.css';

function ExpandableImage({ src, alt, onExpand }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    // Only block the events that page-flip uses to START a drag/flip
    // gesture. Deliberately NOT including 'click' — React's onClick is
    // attached at the root via event delegation, so stopping propagation
    // on click here would prevent it from ever reaching React at all.
    const stop = (e) => {
      e.stopPropagation();
    };

    const events = ['mousedown', 'pointerdown', 'touchstart'];
    events.forEach((evt) => btn.addEventListener(evt, stop));

    return () => {
      events.forEach((evt) => btn.removeEventListener(evt, stop));
    };
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

// Full-screen overlay showing one enlarged image. Click anywhere
// (backdrop, image, or the close button) to dismiss.
function Lightbox({ image, onClose }) {
  if (!image) return null;
  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
      <img className="lightbox-image" src={image.src} alt={image.alt || ''} onClick={onClose} />
    </div>
  );
}

function PageHint({ isCover }) {
  return (
    <>
      {!isCover && <span className="page-hint page-hint-left">← back</span>}
      <span className="page-hint page-hint-right">
        {isCover ? 'open the book →' : 'turn page →'}
      </span>
    </>
  );
}

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
    <PageHint isCover />
  </div>
));

const OverviewPage = React.forwardRef(({ project, page, onExpand }, ref) => (
  <div className={`page ${page.pageClassName || ''}`} style={page.pageStyle} ref={ref}>
    <div className="page-content project">
      <h2>{project.title}</h2>
      {page.role && <p className="project-role">{page.role}</p>}
      {page.image && (
        <figure className="content-image">
          <ExpandableImage src={page.image} alt={project.title} onExpand={onExpand} />
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
    <PageHint />
  </div>
));

const CustomPage = React.forwardRef(({ page, onExpand }, ref) => (
  <div className={`page ${page.pageClassName || ''}`} style={page.pageStyle} ref={ref}>
    <div className="page-content custom">
      {page.blocks.map((block, i) => (
        <Block key={i} block={block} onExpand={onExpand} />
      ))}
    </div>
    <PageHint />
  </div>
));

const SplitPage = React.forwardRef(({ page, onExpand }, ref) => (
  <div className={`page split ${page.pageClassName || ''}`} style={page.pageStyle} ref={ref}>
    <div className="page-content split">
      <div className="split-text">
        {page.heading && <h3 className="content-heading">{page.heading}</h3>}
        {page.paragraphs?.map((p, i) => (
          <p key={i} className="content-text">{p}</p>
        ))}
        {page.link && (
          <a className="split-link" href={page.link.url} target="_blank" rel="noreferrer">
            {page.link.label}
          </a>
        )}
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
    <PageHint />
  </div>
));

function Block({ block, onExpand }) {
  switch (block.type) {
    case 'heading':
      return <h3 className="content-heading">{block.text}</h3>;
    case 'text':
      return <p className="content-text">{block.text}</p>;
    case 'image':
      return (
        <figure className="content-image">
          <ExpandableImage src={block.src} alt={block.alt} onExpand={onExpand} />
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

function renderProjectPage(project, page, key, onExpand) {
  if (page.type === 'custom') return <CustomPage key={key} page={page} onExpand={onExpand} />;
  if (page.type === 'split') return <SplitPage key={key} page={page} onExpand={onExpand} />;
  return <OverviewPage key={key} project={project} page={page} onExpand={onExpand} />;
}

// Order categories appear in the tab list. Add 'Product Design' entries
// here once those projects exist — anything not listed falls into
// "Other" at the end automatically, so nothing silently disappears.
const CATEGORY_ORDER = ['Game Development', 'Web Development', 'Product Design'];

// Base hue per category — tabs within a category are shades of this.
const CATEGORY_COLORS = {
  'Game Development': ['#c0392b', '#a93226', '#922b21'],
  'Web Development': ['#2d6ea3', '#245a85', '#1c4666'],
  'Product Design': ['#4a8a3f', '#3d7233', '#2f5a27'],
  Other: ['#8e3f9e', '#763383', '#5e2768'],
};

function Book() {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  const { flatPages, groupedTabs } = useMemo(() => {
    const flatPages = [];
    const projectRanges = [];
    let cursor = 1;

    projects.forEach((project) => {
      const startIndex = cursor;
      project.pages.forEach((page, i) => {
        flatPages.push(renderProjectPage(project, page, `${project.id}-${i}`, setLightboxImage));
        cursor += 1;
      });
      const endIndex = cursor - 1;
      projectRanges.push({ startIndex, endIndex, project });
    });

    // Bucket by category, preserving CATEGORY_ORDER; anything with an
    // unrecognized/missing category lands in "Other" rather than
    // vanishing from the tab list.
    const buckets = {};
    projectRanges.forEach((range) => {
      const cat = CATEGORY_ORDER.includes(range.project.category)
        ? range.project.category
        : 'Other';
      if (!buckets[cat]) buckets[cat] = [];
      buckets[cat].push(range);
    });

    const orderedCategories = [
      ...CATEGORY_ORDER.filter((c) => buckets[c]?.length),
      ...(buckets.Other?.length ? ['Other'] : []),
    ];

    const groupedTabs = orderedCategories.map((category) => ({
      category,
      items: buckets[category],
    }));

    return { flatPages, groupedTabs };
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
            maxWidth={900}
            minHeight={420}
            maxHeight={1200}
            size="stretch"
            maxShadowOpacity={0.5}
            drawShadow={true}
            showCover={true}
            usePortrait={true}
            mobileScrollSupport={true}
            disableFlipByClick={!!lightboxImage}
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
            {groupedTabs.map(({ category, items }, i) => {
              const isActive = currentPage >= items[0].startIndex && currentPage <= items[items.length - 1].endIndex;
              const palette = CATEGORY_COLORS[category] || CATEGORY_COLORS.Other;
              return (
                <button
                  key={category}
                  className={`book-tab ${isActive ? 'active' : ''}`}
                  style={{ background: palette[0] }}
                  onClick={() => goToProject(items[0].startIndex)}
                  title={category}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
}

export default Book;