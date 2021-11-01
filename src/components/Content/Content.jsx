import React from 'react';
import ForWhom from '../ForWhom/ForWhom';
import KeepInTouch from '../KeepInTouch/KeepInTouch';
import Plan from '../Plan/Plan';
import Release from '../Release/Release';
import Tickets from '../Tickets/Tickets';
import './Content.css';

export default function Content({
  setOpenFreeModal, setOpenBuyModal, forWhomRef, planRef, ticketsRef, contactsRef, setNumberTicket,
}) {
  return (
    <main className="content">
      <ForWhom forWhomRef={forWhomRef} />
      <Release />
      <Plan planRef={planRef} />
      <Tickets
        setOpenFreeModal={setOpenFreeModal}
        setOpenBuyModal={setOpenBuyModal}
        ticketsRef={ticketsRef}
        setNumberTicket={setNumberTicket}
      />
      <KeepInTouch contactsRef={contactsRef}/>
    </main>
  )
}
