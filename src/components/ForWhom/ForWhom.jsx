import React from 'react';
import ForWhomItem from '../ForWhomItem/ForWhomItem';
import Title from '../Title/Title';
import './ForWhom.css';
import picOne from '../../images/for-whom/mkc.png';
import picTwo from '../../images/for-whom/wtw.png';
import grand from '../../images/for-whom/grand.png';
import state from '../../images/for-whom/state.png';

import smiles from '../../images/for-whom/smiles.png';
import { useTranslation } from 'react-i18next';

export default function ForWhom({ forWhomRef }) {
  const { t } = useTranslation();

  const forWhomArr = [
    {
      id: 1,
      title: t('forWhoms.first.title'),
      subtitle: t('forWhoms.first.subtitle'),
    },
    {
      id: 2,
      title: t('forWhoms.second.title'),
      subtitle: t('forWhoms.second.subtitle'),
    },
    {
      id: 3,
      title: t('forWhoms.third.title'),
      subtitle: t('forWhoms.third.subtitle'),
    }
  ];

  return (
    <section className="for-whom" ref={forWhomRef}>
      <div className="for-whom__container">
        <Title text={t('forWhom')} />
        <ul className="list for-whom__list">
          {
            forWhomArr.map((item) => (
              <ForWhomItem
                title={item.title}
                subtitle={item.subtitle}
                key={item.id}
              >
                {
                  item.id === 1 && (
                    <div className="for-whom-item__block for-whom-item__block_content for-whom-item__block_content_one">
                      <img src={smiles} alt="people" className="image for-whom-item__image" />
                      <ul className="list">
                        <li className="for-whom-item__list-item">{t('forWhoms.first.list.first')}</li>
                        <li className="for-whom-item__list-item">{t('forWhoms.first.list.second')}</li>
                        <li className="for-whom-item__list-item">{t('forWhoms.first.list.third')}</li>
                      </ul>
                    </div>
                  )
                }
                {
                  item.id === 2 && (
                    <div className="for-whom-item__block for-whom-item__block_content for-whom-item__block_content_two">
                      <ul className="list">
                        <li className="for-whom-item__item">
                          <p className="for-whom-item__item-title">{t('forWhoms.second.list.first')}</p>
                          <span className="for-whom-item__item-percent for-whom-item__item-percent_green">+47%</span>
                          <span className="for-whom-item__slider-track for-whom-item__slider-track_green">
                            <span className="for-whom-item__slider-thumb" />
                          </span>
                        </li>
                        <li className="for-whom-item__item">
                          <p className="for-whom-item__item-title">{t('forWhoms.second.list.second')}</p>
                          <span className="for-whom-item__item-percent for-whom-item__item-percent_blue">+25%</span>
                          <span className="for-whom-item__slider-track for-whom-item__slider-track_blue">
                            <span className="for-whom-item__slider-thumb" />
                          </span>
                        </li>
                        <p className="for-whom-item__text">{t('forWhoms.second.list.third')}</p>
                      </ul>
                      <div className="for-whom-item__block for-whom-item__block_image">
                        <img src={picOne} alt="" className="image for-whom-item__image" />
                        <img src={picTwo} alt="" className="image for-whom-item__image" />
                      </div>
                    </div>
                  )
                }
                {
                  item.id === 3 && (
                    <div className="for-whom-item__block for-whom-item__block_content for-whom-item__block_content_three">
                      <h3 className="for-whom-item__title">{t('forWhoms.third.list.first')}</h3>
                      <p className="for-whom-item__text">{t('forWhoms.third.list.second')}</p>
                      <img src={grand} alt="state" className="for-whom-item__image-grand" />
                      <img src={state} alt="state" className="for-whom-item__image" />
                    </div>
                  )
                }
              </ForWhomItem>
            ))
          }
        </ul>        
      </div>
    </section>
  )
}
