import React from 'react';
import PageHint from './PageHint';
import './styles/cover.css';

const CoverPage = React.forwardRef(({ name, tagline, pageClassName = '', pageStyle }, ref) => (
  <div className={`page cover ${pageClassName}`} style={pageStyle} ref={ref}>
    <div className="page-content cover">
      <h1>{name}</h1>
      <p>{tagline}</p>
    </div>
    <PageHint isCover />
  </div>
));

export default CoverPage;