import React from 'react';
import './Checkbox.css';

export default function Checkbox({ id, name, checked, onChange, styles }) {
  return (
    <div className={`checkbox${styles ? ` ${styles}` : ''}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className="checkbox__input"
        required
      />
      <span className="checkbox__checkmark">

        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.8125 8.8961L8.57763 13.6612L18.4256 3.81329" />
        </svg>
      </span>
    </div>
  )
}
