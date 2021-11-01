import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal';
import './Movie.css';


export default function Movie({ openModal, setOpenModal, numberTicket }) {
  const { i18n } = useTranslation();
  return (
    <Modal
      openModal={openModal}
      setOpenModal={setOpenModal}
      overlay
      styles="movie"
      numberTicket={numberTicket}
    >
      <iframe
        width="100%"
        height="100%"
        src={
          ((i18n.language === 'ru-RU') || (i18n.language === 'ru'))
            ? 'https://www.youtube.com/embed/Ct6fQ8nizGw'
            : 'https://www.youtube.com/embed/yAyXqyw-Cjo'
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Modal>
  )
}