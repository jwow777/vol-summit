/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';
import background from '../../images/header/bg.png';
import Title from '../Title/Title';
import { useTranslation } from 'react-i18next';

export default function Header({ forWhomRef, planRef, ticketsRef, contactsRef, scrollToEl, setOpenMovieModal, setOpenMenu, setOpenLanguage }) {
  const { i18n, t } = useTranslation();
  return (
    <header className="header" style={{ backgroundImage: `url(${background})` }}>
      <div className="header__container">
        <div className="header__block header__block_top">
          <h2 className="header__logo-title">VOL <span>Summit 2021</span></h2>
          <div className="header__block header__block_right">
            <ul className="list header__list">
              <li className="header__item-link" onClick={() => scrollToEl(forWhomRef)}>{t('forWhom')}</li>
              <li className="header__item-link" onClick={() => scrollToEl(planRef)}>{t('plan')}</li>
              <li className="header__item-link" onClick={() => scrollToEl(contactsRef)}>{t('contacts')}</li>
            </ul>
            <button
              type="button"
              className="btn header__btn-lang"
              onClick={() => setOpenLanguage(true)}
            >
              {((i18n.language === 'ru-RU') || (i18n.language === 'ru')) ? 'ru' : 'en'}
            </button>
            <button
              type="button"
              className="btn btn_blue header__btn"
              onClick={() => scrollToEl(ticketsRef)}
            >{((i18n.language === 'ru-RU') || (i18n.language === 'ru')) ? t('tickets') : t('free')}</button>          
            <button
              type="button"
              className="btn header__btn-menu"
              onClick={() => setOpenMenu(true)}
            >
              <svg viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5391 23.2072H29.6752M1.93555 2.40245H29.6752H1.93555ZM1.93555 12.8048H29.6752H1.93555Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>        
        </div>
        <div className="header__content">
          <div className="header__block header__block__bottom">
            <Title text={t('header.title')} />
            <p className="header__subtitle">{t('header.subtitle')}</p>
            <div className="header__block header__block__btn">
              <button
                type="button"
                className="btn btn_blue header__btn"
                onClick={() => scrollToEl(ticketsRef)}
              >{t('header.tickets')}</button>
              <p className="header__date">{t('header.adress')}</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn header__btn-watch"
          onClick={() => setOpenMovieModal(true)}
        >
          <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9457 39.3383C16.0849 39.3383 11.4233 37.4074 7.98619 33.9703C4.54913 30.5332 2.61821 25.8716 2.61821 21.0108C2.61821 16.1501 4.54913 11.4884 7.98619 8.05138C11.4233 4.61431 16.0849 2.68339 20.9457 2.68339C25.8064 2.68339 30.4681 4.61431 33.9051 8.05138C37.3422 11.4884 39.2731 16.1501 39.2731 21.0108C39.2731 25.8716 37.3422 30.5332 33.9051 33.9703C30.4681 37.4074 25.8064 39.3383 20.9457 39.3383ZM20.9457 41.9565C26.5008 41.9565 31.8284 39.7497 35.7565 35.8217C39.6845 31.8936 41.8913 26.566 41.8913 21.0108C41.8913 15.4557 39.6845 10.1281 35.7565 6.20003C31.8284 2.27195 26.5008 0.0651855 20.9457 0.0651855C15.3905 0.0651855 10.0629 2.27195 6.13484 6.20003C2.20677 10.1281 0 15.4557 0 21.0108C0 26.566 2.20677 31.8936 6.13484 35.8217C10.0629 39.7497 15.3905 41.9565 20.9457 41.9565V41.9565Z" />
            <path d="M16.4185 13.3002C16.6326 13.1899 16.873 13.1409 17.1132 13.1585C17.3535 13.176 17.5842 13.2595 17.78 13.3997L26.9437 19.9452C27.1134 20.0663 27.2517 20.2262 27.3472 20.4115C27.4426 20.5969 27.4924 20.8024 27.4924 21.0108C27.4924 21.2193 27.4426 21.4248 27.3472 21.6101C27.2517 21.7955 27.1134 21.9553 26.9437 22.0764L17.78 28.622C17.5842 28.7621 17.3536 28.8455 17.1136 28.863C16.8735 28.8806 16.6332 28.8316 16.4191 28.7215C16.2051 28.6113 16.0255 28.4443 15.9003 28.2387C15.775 28.0332 15.7088 27.7971 15.709 27.5563V14.4653C15.7087 14.2247 15.7748 13.9886 15.9 13.783C16.0252 13.5775 16.2046 13.4104 16.4185 13.3002Z" />
          </svg>
          {t('header.watch')}
        </button>    
      </div>
    </header>
  )
}
