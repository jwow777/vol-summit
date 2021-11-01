import React from 'react'
import './Title.css';

export default function Title({ text }) {
  return (
    <div className="title">
      <span className="title__curcle"/>
      <h2 className="title__text">{text}</h2>
    </div>
  )
}
