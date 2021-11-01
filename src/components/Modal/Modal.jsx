import React from 'react';
import './Modal.css';

export default function Modal({
  children, openModal, setOpenModal, overlay, setFormState, setNumberTicket, styles, numberTicket, menu
}) {
  const handleClose = () => {
    setOpenModal(false);
    if (numberTicket === null) return;
    setTimeout(() => {
      setNumberTicket(null);
      setFormState({
        name: '',
        phone: '',
        email: '',
        position: '',
        policy: false,
      });
    }, 500);
  };
  return (
    <div
      className={`modal${overlay ? ' modal_overlay' : ''}${menu ? ' modal_menu' : ''}${openModal ? ' modal_opened' : ''}`}
      onClick={handleClose}
    >
      <div
        className={`modal__container${styles ? ` modal__container_${styles}` : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        { children }
      </div>
    </div>
  )
}
