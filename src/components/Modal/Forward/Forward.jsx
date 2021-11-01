import React from 'react';
import Modal from '../Modal';
import SocialItem from '../../SocialItem/SocialItem';
import { useTranslation } from 'react-i18next';
import './Forward.css';

import background from '../../../images/modal/bg2.jpg';
import tg from '../../../images/modal/tg.jpg';
import fb from '../../../images/modal/fb.jpg';
import ws from '../../../images/modal/ws.jpg';
import twitter from '../../../images/modal/tw.jpg';
import linkedin from '../../../images/modal/in.jpg';
import instagram from '../../../images/modal/ig.jpg';

const socialArrEn = [
  {
    id: 1,
    title: 'facebook',
    url: 'https://www.facebook.com/VOL-Fastest-corporate-messenger-106518611789494',
    img: fb,
  },
  {
    id: 2,
    title: 'telegram',
    url: 'https://www.facebook.com/VOL-Fastest-corporate-messenger-106518611789494',
    img: tg,
  },
  {
    id: 3,
    title: 'linkedin',
    url: 'https://www.linkedin.com/company/76209762',
    img: linkedin,
  },
  {
    id: 4,
    title: 'twitter',
    url: 'https://twitter.com/volmessenger',
    img: twitter,
  },
  {
    id: 5,
    title: 'instagram',
    url: 'https://instagram.com/vol.bz',
    img: instagram,
  },
  {
    id: 6,
    title: 'whatsApp',
    url: 'https://instagram.com/vol.bz',
    img: ws,
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
    title: 'telegram',
    url: 'https://www.facebook.com/VOL-Fastest-corporate-messenger-106518611789494',
    img: tg,
  },
  {
    id: 3,
    title: 'linkedin',
    url: 'https://www.linkedin.com/company/76209762',
    img: linkedin,
  },
  {
    id: 4,
    title: 'twitter',
    url: 'https://twitter.com/volmessenger',
    img: twitter,
  },
  {
    id: 5,
    title: 'instagram',
    url: 'https://instagram.com/vol.bz',
    img: instagram,
  },
  {
    id: 6,
    title: 'whatsApp',
    url: 'https://instagram.com/vol.bz',
    img: ws,
  }
];

export default function Forward({ openModal, setOpenModal }) {
  const { i18n, t } = useTranslation();

  const isLang = (lang) => {
    if ((lang === 'ru-RU') || (lang === 'ru')) {
      return socialArrRu;
    }
    return socialArrEn;
  };

  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <div
        className="modal__block modal__block_title_social"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h3 className="modal__title">Поделиться</h3>
        <p className="modal__text">Расскажите друзьям, что идете на нашу презентацию</p>
      </div>
      <div className="modal__block modal__block_content_social">
        <ul className="list">
          {
            isLang(i18n.language).map((social) => (
              <SocialItem
                link={social.url}
                img={social.img}
                alt={social.title}
                key={social.id}
                liStyle="social-item"
                linkStyle="link"
                imgStyle="social-item__image"
              />
            ))
          }
        </ul>
        <div className="modal__copy-block">
          <span className="modal__site">VOLSUMMIT2021.COM</span>
          <button type="button" className="btn btn_blue">Copy</button>
        </div>
      </div>
    </Modal>
  )
}
