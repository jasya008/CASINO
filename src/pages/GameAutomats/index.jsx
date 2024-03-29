import React from 'react';
import s from './index.module.scss';
import img from '../../assets/automat.png';
import { Container } from '@mui/material';
import { AutomatsData } from '../../components/automatsData';
import { ButtonsAutomat } from '../../components/buttonsAutomat';
import { TopAutomatGames } from '../../components/TopAutomatGames';
import { ReviewsData } from '../../components/modalReviewsData';
import { useTranslation } from 'react-i18next';
import { FilterBtnGamesMobile } from '../../components/filterButtonsGamesMobile';
import { Link } from 'react-router-dom';

export const GamesAutomats = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container fixed className={s.container}>
        <div className={s.GamesAutomats}>
          <div className={s.texts}>
            <h1 className={s.title}>
              {t('seconPageTitlePart1')} <br />{' '}
              <span>{t('seconPageTitlePart2')}</span>
            </h1>
            <p className={s.text}>{t('secondPageText')}</p>
            <button className={s.button}>
              <Link className={s.link} to='/'>
                {t('buttonGame_text')}
              </Link>
            </button>
          </div>
          <img className={s.img} src={img} alt='' />
        </div>

        <div className={s.lineText}>
          <div className={s.line}></div>
          <p className={s.text}>{t('GamesOfWeek')}</p>
          <div className={s.line}></div>
        </div>
      </Container>

      <TopAutomatGames />

      <FilterBtnGamesMobile />

      <ButtonsAutomat />

      <AutomatsData />

      <ReviewsData />
    </>
  );
};
