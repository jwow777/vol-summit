import React from 'react'
import './TicketItem.css';
import barcode from '../../images/ticket/barcode.png';
import { useTranslation } from 'react-i18next';

export default function TicketItem({ title, price, list, submit, openModal, setNumberTicket, id }) {
  const { t } = useTranslation();

  const handleOpen = () => {
    openModal(true);
    setNumberTicket(id);
  };

  return (
    <li className="ticket-item">
      <div className="ticket-item__header">
        <h3 className="ticket-item__title">{title}</h3>
      </div>
      <ul className="list ticket-item__list ticket-item__list_date">
        <li className="ticket-item__item">{price}</li>
        <li className="ticket-item__item">{t('date')}</li>
      </ul>
      <ul className="ticket-item__list ticket-item__list_desc">
        {
          list.map((item, index) => (
            <li className="ticket-item__item" key={index}>{item}</li>
          ))
        }
      </ul>
      <div className="ticket-item__block ticket-item__block_bottom">
        <img src={barcode} alt="barcode" className="ticket-item__barcode" />
        <button
          type="button"
          className="btn btn_blue ticket-item__btn"
          onClick={handleOpen}
        >{submit}</button>
      </div>
    </li>
  )
}
