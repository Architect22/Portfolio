import React, { useRef, useState, useMemo } from 'react';
import HTMLFlipBook from 'react-pageflip';
import projects from '../../data/projects';

import Page from './Page';
import CoverPage from './CoverPage';
import OverviewPage from './OverviewPage';
import SplitPage from './SplitPage';
import CustomPage from './CustomPage';
import Tabs from './Tabs';
import Lightbox from './Lightbox';
import { CATEGORY_ORDER } from './constants';

import './styles/layout.css';

function renderProjectPage(project, page, key, onExpand) {
  if (page.type === 'custom') return <CustomPage key={key} page={page} onExpand={onExpand} />;
  if (page.type === 'split') return <SplitPage key={key} page={page} onExpand={onExpand} />;
  return <OverviewPage key={key} project={project} page={page} onExpand={onExpand} />;
}

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
      projectRanges.push({ startIndex, endIndex: cursor - 1, project });
    });

    const buckets = {};
    projectRanges.forEach((range) => {
      const cat = CATEGORY_ORDER.includes(range.project.category) ? range.project.category : 'Other';
      (buckets[cat] ||= []).push(range);
    });

    const orderedCategories = [
      ...CATEGORY_ORDER.filter((c) => buckets[c]?.length),
      ...(buckets.Other?.length ? ['Other'] : []),
    ];

    const groupedTabs = orderedCategories.map((category) => ({ category, items: buckets[category] }));

    return { flatPages, groupedTabs };
  }, []);

  const lastPageIndex = flatPages.length + 1;
  const isCoverOrBack = currentPage === 0 || currentPage >= lastPageIndex;

  const goToProject = (startIndex) => {
    bookRef.current?.pageFlip()?.flip(startIndex);
  };

  const handleFlip = (e) => setCurrentPage(e.data);

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
          <Tabs groupedTabs={groupedTabs} currentPage={currentPage} onSelectCategory={goToProject} />
        )}
      </div>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
}

export default Book;