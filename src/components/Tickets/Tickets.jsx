import React from 'react'
import { useTranslation } from 'react-i18next';
import TicketItem from '../TicketItem/TicketItem';
import Title from '../Title/Title';
import './Tickets.css';

export default function Tickets({ setOpenFreeModal, setOpenBuyModal, ticketsRef, setNumberTicket }) {
  const { i18n, t } = useTranslation();
  return (
    <section className="tickets" ref={ticketsRef}>
      <div className="tickets__container">
        <Title text={t('tickets')} />
        {/* <span className="tickets__countdown">17 days 5 h 44 m</span> */}
        <ul className="list tickets__list">
          <TicketItem
            title={t('ticket.first.title')}
            price={t('free')}
            list={[
              t('ticket.first.list.first'),
              t('ticket.first.list.second'),
              t('ticket.first.list.third')
            ]}
            submit={t('ticket.first.submit')}
            openModal={setOpenFreeModal}
            setNumberTicket={setNumberTicket}
            id={1}
            key={1}
          />
          { ((i18n.language === 'ru-RU') || (i18n.language === 'ru')) &&
            (
              <>
                <TicketItem
                  title={t('ticket.second.title')}
                  price={t('ticket.second.price')}
                  list={[
                    t('ticket.second.list.first'),
                    t('ticket.second.list.second'),
                    t('ticket.second.list.third')
                  ]}
                  submit={t('ticket.second.submit')}
                  openModal={setOpenBuyModal}
                  setNumberTicket={setNumberTicket}
                  id={3}
                  key={2}
                />
                <TicketItem
                  title={t('ticket.third.title')}
                  price={t('free')}
                  list={[
                    t('ticket.third.list.first'),
                    t('ticket.third.list.second'),
                    t('ticket.third.list.third')
                  ]}
                  submit={t('ticket.third.submit')}
                  openModal={setOpenFreeModal}
                  setNumberTicket={setNumberTicket}
                  id={2}
                  key={3}
                />
              </>
            )
          }
          <TicketItem
            title={t('ticket.fourth.title')}
            price={t('ticket.fourth.price')}
            list={[
              t('ticket.fourth.list.first'),
              t('ticket.fourth.list.second'),
              t('ticket.fourth.list.third')
            ]}
            openModal={setOpenBuyModal}
            submit={t('ticket.fourth.submit')}
            setNumberTicket={setNumberTicket}
            id={((i18n.language === 'ru-RU') || (i18n.language === 'ru')) ? 4 : 2}
            key={4}
          />
        </ul>
      </div>
    </section>
  )
}
