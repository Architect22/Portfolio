import React from 'react';
import Block from './Block';
import PageHint from './PageHint';
import './styles/custom.css';

// Groups a flat blocks array into sections, each starting at a heading.
// Anything before the first heading becomes its own headless group.
// This lets each heading stay pinned to the top of its section while
// the rest of that section's content can center in the leftover space.
function groupBlocks(blocks) {
  const groups = [];
  let current = null;

  blocks.forEach((block) => {
    if (block.type === 'heading') {
      current = { heading: block, items: [] };
      groups.push(current);
    } else if (current) {
      current.items.push(block);
    } else {
      current = { heading: null, items: [block] };
      groups.push(current);
    }
  });

  return groups;
}

const CustomPage = React.forwardRef(({ page, onExpand }, ref) => {
  const groups = groupBlocks(page.blocks);

  return (
    <div className={`page ${page.pageClassName || ''}`} style={page.pageStyle} ref={ref}>
      <div className="page-content custom">
        {groups.map((group, i) => (
          <div className="custom-section" key={i}>
            {group.heading && <Block block={group.heading} onExpand={onExpand} />}
            <div className="custom-section-body">
              {group.items.map((block, j) => (
                <Block key={j} block={block} onExpand={onExpand} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <PageHint />
    </div>
  );
});

export default CustomPage;