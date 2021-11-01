import React from 'react';
import Title from '../Title/Title';
import SocialItem from '../SocialItem/SocialItem';
import './KeepInTouch.css';

import reddit from '../../images/social/reddit.png';
import fb from '../../images/social/fb.png';
import cb from '../../images/social/cb.png';
import twitter from '../../images/social/twitter.png';
import linkedin from '../../images/social/in.png';
import instagram from '../../images/social/ig.png';
import { useTranslation } from 'react-i18next';

const socialArrEn = [
  {
    id: 1,
    title: 'reddit',
    url: 'https://www.reddit.com/r/volteam/',
    img: reddit,
  },
  {
    id: 2,
    title: 'facebook',
    url: 'https://www.facebook.com/VOL-Fastest-corporate-messenger-106518611789494',
    img: fb,
  },
  {
    id: 3,
    title: 'crunchbase',
    url: 'https://www.crunchbase.com/organization/vol-9992',
    img: cb,
  },
  {
    id: 4,
    title: 'twitter',
    url: 'https://twitter.com/volmessenger',
    img: twitter,
  },
  {
    id: 5,
    title: 'linkedin',
    url: 'https://www.linkedin.com/company/76209762',
    img: linkedin,
  },
  {
    id: 6,
    title: 'instagram',
    url: 'https://instagram.com/vol.bz',
    img: instagram,
  }
];

const socialArrRu = [
  {
    id: 1,
    title: 'facebook',
    url: 'https://www.facebook.com/volspace',
    img: fb,
  },
  {
    id: 2,
    title: 'crunchbase',
    url: 'https://www.crunchbase.com/organization/vol-9992',
    img: cb,
  },
  {
    id: 3,
    title: 'linkedin',
    url: 'https://www.linkedin.com/company/76209762',
    img: linkedin,
  },
  {
    id: 4,
    title: 'instagram',
    url: 'https://instagram.com/vol_bz',
    img: instagram,
  }
];

export default function KeepInTouch({ contactsRef }) {
  const { i18n, t } = useTranslation();

  const isLang = (lang) => {
    if ((lang === 'ru-RU') || (lang === 'ru')) {
      return socialArrRu;
    }
    return socialArrEn;
  };

  return (
    <section className="keep" ref={contactsRef}>
      <div className="keep__container">
        <Title text={t('keep.title')} />
        <div className="keep__block keep__block_content">
          <p className="keep__date">{t('keep.date')}</p>
          <div>
            <p className="keep__text">{t('keep.support')}</p>
            {
              (i18n.language === 'ru-RU') || (i18n.language === 'ru') ? (
                <ul className="list">
                  <li>
                    <a href="mailto:rusupport@volsummit.com" className="link keep__link">rusupport@volsummit.com</a>
                  </li>
                  <li>
                    <a href="tel:+74950215252" className="link keep__link">+7 (495) 021-52-52</a>
                  </li>
                </ul>
              ) : (
                <a href="mailto:support@volsummit.com" className="link keep__link">support@volsummit.com</a>
              )
            }
          </div>
          <ul className={`list keep__list${((i18n.language === 'ru-RU') || (i18n.language === 'ru')) ? ' keep__list_ru' : ''}`}>
            {isLang(i18n.language).map((social) => (
              <SocialItem
                link={social.url}
                img={social.img}
                alt={social.title}
                key={social.id}
                liStyle="social-item"
                linkStyle="link"
                imgStyle="social-item"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
