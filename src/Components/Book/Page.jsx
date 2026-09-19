import React from 'react';
import PageHint from './PageHint';
import './styles/page-base.css';

const Page = React.forwardRef(({ children, className = '', pageClassName = '', pageStyle, hint = true }, ref) => (
  <div className={`page ${className} ${pageClassName}`} style={pageStyle} ref={ref}>
    <div className="page-content">{children}</div>
    {hint && <PageHint />}
  </div>
));

export default Page;