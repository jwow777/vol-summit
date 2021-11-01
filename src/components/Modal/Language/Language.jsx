import React from 'react';
import { useTranslation } from 'react-i18next';
import './Language.css';

export default function Language({ openModal, setOpenModal  }) {
  const { i18n, t } = useTranslation();
  return (
    <div
      className={`modal${openModal ? ' modal_opened' : ''}`}
      onClick={() => setOpenModal(false)}
    >
      <div className="language__wrapper">
        <div className="language__container" onClick={(e) => e.stopPropagation()}>
          <ul className="list language__list">
            {
              ((i18n.language !== 'ru') && (i18n.language !== 'ru-RU')) && (
                <li>
                  <button
                    type="button"
                    className="btn language__btn"
                    onClick={() => {
                      i18n.changeLanguage('ru');
                      setOpenModal(false);
                    }}
                  >Ru</button>
                </li>         
              )
            }
            {
              ((i18n.language === 'ru') || (i18n.language === 'ru-RU')) && (
                <li>
                  <button
                    type="button"
                    className="btn language__btn"
                    onClick={() => {
                      i18n.changeLanguage('en');
                      setOpenModal(false);
                    }}
                  >En</button>
                </li>          
              )
            }
            <li>
              <button
                type="button"
                className="btn language__btn"
              >De</button>
            </li>
            <li>
              <button
                type="button"
                className="btn language__btn"
              >Fr</button>
            </li>
          </ul>        
        </div>
      </div>
    </div>
  )
}