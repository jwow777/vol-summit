import React, { useEffect, useRef, useState } from 'react';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Free from '../Modal/Free/Free';
import Buy from '../Modal/Buy/Buy';
import './App.css';
import Movie from '../Modal/Movie/Movie';
import Menu from '../Modal/Menu/Menu';
import Language from '../Modal/Language/Language';

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openFreeModal, setOpenFreeModal] = useState(false);
  const [openBuyModal, setOpenBuyModal] = useState(false);
  const [openMovieModal, setOpenMovieModal] = useState(false);
  const [numberTicket, setNumberTicket] = useState(null);

  const forWhomRef = useRef();
  const planRef = useRef();
  const ticketsRef = useRef();
  const contactsRef = useRef();
  const scrollToEl = (ref) => ref.current.scrollIntoView({
    behavior: "smooth"
  });

  useEffect(() => {
    if (openLanguage) {
      window.addEventListener("scroll", () => setOpenLanguage(false));
      return () => window.removeEventListener("scroll", () => setOpenLanguage(false));      
    }
  }, [openLanguage]);

  return (
    <>
      <Header
        forWhomRef={forWhomRef}
        planRef={planRef}
        ticketsRef={ticketsRef}
        contactsRef={contactsRef}
        scrollToEl={scrollToEl}
        setOpenMovieModal={setOpenMovieModal}
        setOpenMenu={setOpenMenu}
        setOpenLanguage={setOpenLanguage}
      />
      <Content
        setOpenFreeModal={setOpenFreeModal}
        setOpenBuyModal={setOpenBuyModal}
        forWhomRef={forWhomRef}
        planRef={planRef}
        ticketsRef={ticketsRef}
        contactsRef={contactsRef}
        setNumberTicket={setNumberTicket}
      />
      <Footer />
      <Menu
        openModal={openMenu}
        setOpenModal={setOpenMenu}
        setOpenMenu={setOpenMenu}
        forWhomRef={forWhomRef}
        planRef={planRef}
        ticketsRef={ticketsRef}
        contactsRef={contactsRef}
        scrollToEl={scrollToEl}
        numberTicket={numberTicket}
        setNumberTicket={setNumberTicket}
      />
      <Language
        openModal={openLanguage}
        setOpenModal={setOpenLanguage}
        numberTicket={numberTicket}
      />
      <Free
        openModal={openFreeModal}
        setOpenModal={setOpenFreeModal}
        numberTicket={numberTicket}
        setNumberTicket={setNumberTicket}
      />
      <Buy
        openModal={openBuyModal}
        setOpenModal={setOpenBuyModal}
        numberTicket={numberTicket}
        setNumberTicket={setNumberTicket}
      />
      {
        openMovieModal && (
          <Movie
            openModal={openMovieModal}
            setOpenModal={setOpenMovieModal}
            numberTicket={numberTicket}
          />          
        )
      }
    </>
  )
}

