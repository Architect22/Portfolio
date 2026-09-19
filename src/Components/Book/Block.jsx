import React from 'react';
import ExpandableImage from './ExpandableImage';
import './styles/custom.css';

export default function Block({ block, onExpand }) {
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

    case 'row':
      return (
        <div className="content-row">
          {block.children.map((child, i) => (
            <div
              key={i}
              className="content-row-item"
              style={child.flexBasis ? { flexBasis: child.flexBasis } : undefined}
            >
              <Block block={child} onExpand={onExpand} />
            </div>
          ))}
        </div>
      );

    case 'gallery':
      return (
        <div className="content-gallery" style={{ '--gallery-columns': block.columns || 2 }}>
          {block.images.map((img, i) => (
            <figure key={i} className="content-image">
              <ExpandableImage src={img.src} alt={img.alt} onExpand={onExpand} />
              {img.caption && <figcaption>{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      );

    default:
      return null;
  }
}