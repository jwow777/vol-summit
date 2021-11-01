import React from 'react';
import './SocialItem.css';

export default function SocialItem({ link, img, alt, liStyle, linkStyle, imgStyle }) {
  return (
    <li className={liStyle}>
      <a href={link} className={linkStyle} target="_blank" rel="noreferrer">
        <img src={img} alt={alt} className={`image${imgStyle ? ' social-item__image' : ''}`} />
      </a>
    </li>
  )
}
