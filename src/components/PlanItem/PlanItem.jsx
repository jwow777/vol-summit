import React from 'react';
import './PlanItem.css';

export default function PlanItem({ position, textOne, textGreen, textTwo , duration }) {
  return (
    <li className="plan-item">
      <p className="plan-item__text plan-item__text_position">{position}</p>
      <p className="plan-item__text">
        {textOne}
        <span className="plan-item__text plan-item__text_green">{textGreen}</span>
        {textTwo}
      </p>
    </li>
  )
}
