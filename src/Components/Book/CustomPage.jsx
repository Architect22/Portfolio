import React from 'react';
import Block from './Block';
import PageHint from './PageHint';
import './styles/custom.css';

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

export default CustomPage;