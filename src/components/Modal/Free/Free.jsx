import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal';
import Checkbox from '../../Checkbox/Checkbox';
import './Free.css';

import background from '../../../images/modal/bg.jpg';
import telegramBot from '../../../images/modal/tg.png';
import fb from '../../../images/modal/fb.png';

export default function Free({ openModal, setOpenModal, numberTicket, setNumberTicket }) {
  const { i18n, t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    policy: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'policy') {
      const { checked } = e.target;
      return setFormState({ ...formState, [name]: checked });
    }
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    const urlencoded = new URLSearchParams();
    urlencoded.append("client", "site"); //Заявка с сайта
    urlencoded.append("lang", ((i18n.language === 'ru') || (i18n.language === 'ru-RU')) ? 'ru' : 'en'); //en / ru
    urlencoded.append("name", formState.name); // имя
    urlencoded.append("phone", formState.phone); //телефон
    urlencoded.append("email", formState.email); //email
    urlencoded.append("position", formState.position); //должность
    urlencoded.append("type_ticket", numberTicket); //тип билета, список типов ниже для каждого сайта
    
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
  
    fetch("https://volsummit.com/backend/site.php", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    setOpenModal(false);
    setFormState({
      name: '',
      phone: '',
      email: '',
      position: '',
      policy: true,
    });
  };

  return (
    <Modal
      openModal={openModal}
      setOpenModal={setOpenModal}
      setFormState={setFormState}
      setNumberTicket={setNumberTicket}
      numberTicket={numberTicket}
    >
      <div
        className="modal__block modal__block_title"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h3 className="modal__title">{numberTicket === 1 ? t('form.titleOne') : t('form.titleThree')}</h3>
      </div>
      <form
        className="modal__form"
        onSubmit={handleSubmitForm}
      >
        <input
          type="text"
          name="name"
          placeholder={t('form.fullname')}
          className="input modal__input"
          required
          value={formState.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder={t('form.phone')}
          className="input modal__input"
          required
          value={formState.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder={t('form.email')}
          className="input modal__input"
          required
          value={formState.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="position"
          placeholder={t('form.position')}
          className="input modal__input"
          required
          value={formState.position}
          onChange={handleChange}
        />
        <label className="modal__label">
          <Checkbox
            name="policy"
            checked={formState.policy}
            onChange={handleChange}
          />
          <span>{t('form.policy')}</span>        
        </label>
        <div className="modal__block modal__block_content">
          <div className="modal__block modal__block_bot-text">
            <span className="modal__line"/>
            <span className="modal__text-bot">{t('form.bot')}</span>
            <span className="modal__line"/>            
          </div>
          {
            ((i18n.language === 'ru') || (i18n.language === 'ru-RU')) ? (
              <ul className="list modal__block modal__block_social">
                <li>
                  <a href="https://www.messenger.com/t/volspace" target="_blank" className="modal__block modal__block_bot-link" rel="noreferrer">
                    <img src={fb} alt="Facebook" className="image modal__image" />
                    <span className="modal__text-bot">Messenger</span>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/VOL_Summit_ru_bot" target="_blank" className="modal__block modal__block_bot-link" rel="noreferrer">
                    <img src={telegramBot} alt="Telegram" className="image modal__image" />
                    <span className="modal__text-bot">Telegram</span>
                  </a>
                </li>
              </ul>
            ) : (
              <a href="https://www.messenger.com/t/106518611789494" target="_blank" className="modal__block modal__block_bot-link" rel="noreferrer">
                <img src={fb} alt="Facebook" className="image modal__image" />
                <span className="modal__text-bot">Messenger</span>
              </a>               
            )
          }
        </div>
        <button
          type="submit"
          className="btn btn_blue modal__submit"
        >{t('form.getTicket')}</button>
      </form>
    </Modal>
  )
}