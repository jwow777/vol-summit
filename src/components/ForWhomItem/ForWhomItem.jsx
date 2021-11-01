import React from 'react'
import './ForWhomItem.css';

export default function ForWhomItem({ children, title, subtitle }) {
  return (
    <li className="for-whom-item">
      <div className="for-whom-item__block for-whom-item__block_title">
        <h3 className="for-whom-item__title">{title}</h3>
        <hr className="for-whom-item__line" />
        <p className="for-whom-item__subtitle">{subtitle}</p>
      </div>
      {children}
    </li>
  )
}
