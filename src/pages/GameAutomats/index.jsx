import React from 'react';
import s from './index.module.scss';
import img from '../../assets/automat.png';
import { Container } from '@mui/material';
import { AutomatsData } from '../../components/automatsData';
import { ButtonsAutomat } from '../../components/buttonsAutomat';
import { TopAutomatGames } from '../../components/TopAutomatGames';
import { ReviewsData } from '../../components/modalReviewsData';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FilterBtnGamesMobile } from '../../components/filterButtonsGamesMobile';

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
            <button
              className={`${s.button} ${s.link}`}
              onClick={() => {
                const gamesSection = document.getElementById('gamesSection');
                if (gamesSection) {
                  const start = window.pageYOffset;
                  const end = gamesSection.offsetTop;
                  const distance = end - start;
                  const duration = 2500; // Adjust the duration as needed (in milliseconds)

                  let startTime = null;
                  function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const scrollAmount = Math.easeInOutQuad(
                      timeElapsed,
                      start,
                      distance,
                      duration
                    );
                    window.scrollTo(0, scrollAmount);
                    if (timeElapsed < duration)
                      requestAnimationFrame(animation);
                  }

                  // Easing function
                  Math.easeInOutQuad = function (t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return (c / 2) * t * t + b;
                    t--;
                    return (-c / 2) * (t * (t - 2) - 1) + b;
                  };

                  requestAnimationFrame(animation);
                }
              }}
            >
              <a href='#gamesSection' className={s.link}>
                {t('buttonGame_text')}
              </a>
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
