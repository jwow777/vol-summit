import React from 'react';
import { useTranslation } from 'react-i18next';
import PlanItem from '../PlanItem/PlanItem';
import Title from '../Title/Title';
import './Plan.css';

export default function Plan({ planRef }) {
  const { t } = useTranslation();
  return (
    <section className="plan" ref={planRef}>
      <div className="plan__container">
        <Title text={t('plan')} />
        <ul className="list plan__list">
          <PlanItem
            position="01"
            textOne={t('plans.first.textOne')}
            textGreen={t('plans.first.textGreen')}
            textTwo={t('plans.first.textTwo')}
          />
          <PlanItem
            position="02"
            textOne={t('plans.second.textOne')}
            textGreen={t('plans.second.textGreen')}
            textTwo={t('plans.second.textTwo')}
          />
          <PlanItem
            position="03"
            textOne={t('plans.third.textOne')}
            textGreen={t('plans.third.textGreen')}
            textTwo={t('plans.third.textTwo')}
          />
        </ul>
      </div>
    </section>
  )
}
