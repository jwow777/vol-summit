import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal';
import './Menu.css';

import telegramBot from '../../../images/modal/tg.png';
import fb from '../../../images/modal/fb.png';

export default function Menu({ openModal, setOpenModal, setOpenMenu, scrollToEl, forWhomRef, planRef, contactsRef, numberTicket }) {
  const { i18n, t } = useTranslation();
  return (
    <Modal
      openModal={openModal}
      setOpenModal={setOpenModal}
      styles="menu"
      numberTicket={numberTicket}
      menu
    >
      <div className="menu__block menu__block_top">
        <button
          type="button"
          className="btn header__btn-menu"
          onClick={() => setOpenMenu(false)}
        >
          <svg viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5391 23.2072H29.6752M1.93555 2.40245H29.6752H1.93555ZM1.93555 12.8048H29.6752H1.93555Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          type="button"
          className="btn header__btn-lang"
        >
          {((i18n.language === 'ru-RU') || (i18n.language === 'ru')) ? 'ru' : 'en'}
        </button>      
      </div>
      <ul className="list menu__list">
        <li className="header__item-link" onClick={() => scrollToEl(forWhomRef)}>{t('forWhom')}</li>
        <li className="header__item-link" onClick={() => scrollToEl(planRef)}>{t('plan')}</li>
        <li className="header__item-link" onClick={() => scrollToEl(contactsRef)}>{t('contacts')}</li>
      </ul>
      <div className="menu__block menu__block_bottom">
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
        {
          (i18n.language === 'ru-RU') || (i18n.language === 'ru') ? (
            <ul className="list menu__link-block">
              <li>
                <a href="mailto:rusupport@volsummit.com" className="link keep__link">rusupport@volsummit.com</a>
              </li>
              <li>
                <a href="tel:+74950215252" className="link keep__link keep__link_phone">+7 (495) 021-52-52</a>
              </li>
            </ul>
          ) : (
            <a href="mailto:support@volsummit.com" className="link keep__link">support@volsummit.com</a>
          )
        }
      </div>
    </Modal>
  )
}