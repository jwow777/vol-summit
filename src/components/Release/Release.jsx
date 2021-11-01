import React from 'react';
import ReleaseItem from '../ReleaseItem/ReleaseItem';
import { useTranslation } from 'react-i18next';
import './Release.css';

import background from '../../images/release/bg.jpg';
import founder from '../../images/release/founder.png';
import one from '../../images/release/1.png';
import two from '../../images/release/2.png';
import three from '../../images/release/3.png';
import four from '../../images/release/4.png';
import five from '../../images/release/5.png';
import six from '../../images/release/6.png';

const teamArr = [
  {
    id: 1,
    fullName: '',
    img: one,
  },
  {
    id: 2,
    fullName: '',
    img: two,
  },
  {
    id: 3,
    fullName: '',
    img: three,
  },
  {
    id: 4,
    fullName: '',
    img: four,
  },
  {
    id: 5,
    fullName: '',
    img: five,
  },
  {
    id: 6,
    fullName: '',
    img: six,
  },
];

export default function Release() {
  const { t } = useTranslation();
  return (
    <section className="release" style={{ backgroundImage: `url(${background})` }}>
      <div className="release__container">
        <h3 className="release__title">{t('release.title')}</h3>
        <div className="release__block release__block_content">
          <img src={founder} alt="" className="image release__image" />
          <div className="release__block release__block_quote">
            <blockquote className="release__quote">{t('release.quote')}</blockquote>
            <hr className="release__line" />
            <ul className="release__list release__list_founder">
              <li className="release__list-item">{t('release.author')}</li>
              <li className="release__list-item">{t('release.position')}</li>
            </ul>
          </div>
        </div>
        <div className="release__block release__block_bottom">
          <p className="release__text">By VOL team</p>
          <ul className="list release__list release__list_team">
            {
              teamArr.map((person) => (
                <ReleaseItem
                  img={person.img}
                  alt={person.fullName}
                  index={teamArr.length + 1 - person.id}
                  key={person.id}
                />
              ))
            }
            <li className="release-item">+4</li>
          </ul>
        </div>        
      </div>
    </section>
  )
}
