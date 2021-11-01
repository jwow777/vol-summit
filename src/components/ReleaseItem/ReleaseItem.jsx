import React from 'react'
import './ReleaseItem.css';

export default function ReleaseItem({ img, alt, index }) {
  return (
    <li className="release-item" style={{ zIndex: index }}>
      <img src={img} alt={alt}  className="image release-item__image" />
    </li>
  )
}
