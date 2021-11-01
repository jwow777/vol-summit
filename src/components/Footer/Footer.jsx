import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__logo">VOL Summit</h2>
        <a href="https://vol.bz/" className="link footer__product">{t('product')}</a>
        <p className="footer__copyright">All rights reserved ©</p>
        <button
          type="button"
          className="btn footer__scroll"
          onClick={scrollToTop}
        >
          <svg viewBox="0 0 45 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.6716 1.98193V85.2009M22.6716 1.98193L1 23.6535M22.6716 1.98193L44.3432 23.6535" />
          </svg>
        </button>
      </div>
    </footer>
  )
}
