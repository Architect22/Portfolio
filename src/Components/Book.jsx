import React, { useRef, useState, forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import projects from '../data/projects';
import './BookStyle.css';

const Page = forwardRef(({ children, className = '' }, ref) => (
  <div className={`page ${className}`} ref={ref}>
    <div className="page-content">{children}</div>
  </div>
));

const CoverPage = forwardRef(({ name, tagline }, ref) => (
  <div className="page cover" ref={ref}>
    <div className="page-content cover">
      <h1>{name}</h1>
      <p>{tagline}</p>
    </div>
  </div>
));

const ProjectPage = forwardRef(({ project }, ref) => (
  <div className="page" ref={ref}>
    <div className="page-content project">
      <h2>{project.title}</h2>
      {project.role && <p className="project-role">{project.role}</p>}
      <p className="project-description">{project.description}</p>
      {project.tech?.length > 0 && (
        <ul className="project-tech">
          {project.tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
      )}
      {project.links?.length > 0 && (
        <div className="project-links">
          {project.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
      )}
    </div>
  </div>
));

const TAB_COLORS = ['#c0392b', '#2d6ea3', '#4a8a3f', '#8e3f9e'];

function Book() {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const goToProject = (index) => {
    bookRef.current?.pageFlip()?.flip(index + 1);
  };

  // react-pageflip fires this on every flip, including manual drag —
  // so tab highlighting stays in sync even if the user flips by hand
  const handleFlip = (e) => {
    setCurrentPage(e.data);
  };

  return (
    <div className="book-wrapper">
      <HTMLFlipBook
        ref={bookRef}
        width={300}
        height={500}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size="fixed"
        onFlip={handleFlip}
      >
        <CoverPage name="Ben Brown" tagline="Developer & Storyteller" />

        {projects.map((project) => (
          <ProjectPage key={project.id} project={project} />
        ))}

        <Page className="back-cover">
          <p>Thanks for reading — see more at linktr.ee/bentombrown</p>
        </Page>
      </HTMLFlipBook>

      <div className="book-tabs">
        {projects.map((project, i) => {
          // +1 offset accounts for the cover page at index 0
          const isActive = currentPage === i + 1;
          return (
            <button
              key={project.id}
              className={`book-tab ${isActive ? 'active' : ''}`}
              style={{ background: TAB_COLORS[i % TAB_COLORS.length] }}
              onClick={() => goToProject(i)}
              title={project.title}
            >
              {project.tabIcon || project.title[0]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Book;