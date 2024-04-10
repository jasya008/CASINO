import s from './index.module.scss';
import iconTrophy from '../../assets/Trophy.svg';
import star from '../../assets/bigStar.svg';
import { Container } from '@mui/material';
import { GetContext } from '../context/Context';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from 'react';
import { ModalDataCasino } from '../modalDataCasino';
import { CasinoForGames } from '../casinoeForGames';

export const ModalGames = () => {
  const {
    chooseGame: item,
    lang,
    setModalOpenGame,
    modalOpenGame,
  } = GetContext();
  const { t } = useTranslation();

  let CurrentNameGame = '';
  let CurrentTextGame = '';
  let CurrentGenreGame = '';
  let CurrentVolatilityGame = '';
  let CurrentPlatformsGame = '';

  // Game Name
  if (item?.game_name && item?.game_name.length !== 0) {
    CurrentNameGame = item?.game_name[lang];
  } else {
    CurrentNameGame = 'error';
  }

  // Game Text
  if (item?.game_text && item?.game_text.length !== 0) {
    CurrentTextGame = item?.game_text[lang];
  } else {
    CurrentTextGame = 'error';
  }

  // Game Genre
  if (item?.genre && item?.genre.length !== 0) {
    CurrentGenreGame = item?.genre[lang];
  } else {
    CurrentGenreGame = 'error';
  }

  // Game Volatility
  if (item?.volatility && item?.volatility.length !== 0) {
    CurrentVolatilityGame = item?.volatility[lang];
  } else {
    CurrentVolatilityGame = 'error';
  }

  // Game PLatform
  if (item?.platforms && item?.platforms.length !== 0) {
    CurrentPlatformsGame = item?.platforms[lang];
  } else {
    CurrentPlatformsGame = 'error';
  }

  const animation = useSpring({
    opacity: modalOpenGame ? 1 : 0,
    transform: modalOpenGame ? 'translateY(0%)' : 'translateY(-100%)',
  });



  
  return (
    <Container fixed>
      <animated.div style={animation} className='popup'>
        <div
          className={
            modalOpenGame
              ? [s.ModalAutomat, s.modalShow].join(' ')
              : s.ModalAutomat
          }
        >
          <div className={s.left_side}>
            <p className={s.estimate_text}>
              <img className={s.iconTrophy} src={iconTrophy} alt='' />
              {item.ranking_position}
              {t('rank')}
            </p>
            <img className={s.imgAutomat} src={item.image_link} alt='' />

            <p className={s.text}>{CurrentTextGame}</p>

            <button
              className={s.button}
            >
              {t('buttonGame_text')}
            </button>
          </div>

          <div className={s.right_side}>
            <div className={s.all_grade}>
              <CloseIcon
                className={s.icon}
                onClick={() => setModalOpenGame(false)}
              />
              <p className={s.estimate}>
                {' '}
                <img src={star} alt='' className={s.star} />{' '}
                {item.editor_rating}
              </p>
              <p className={s.text_grade}>{t('grade')}</p>
            </div>

            <div className={s.texts}>
              <div className={s.one_side}>
                <p className={s.textOneside}>{t('Date')}</p>
                <p className={s.textOneside}>{t('genre')}</p>
                <p className={s.textOneside}>{t('minBid')}</p>
                <p className={s.textOneside}>{t('maxBid')}</p>
                <p className={s.textOneside}>{t('maxpay')}</p>
                <p className={s.textOneside}>{t('reels')}</p>
                <p className={s.textOneside}>{t('rows')}</p>
                <p className={s.textOneside}>{t('lines')}</p>
                <p className={s.textOneside}>{t('rtp')}</p>
                <p className={s.textOneside}>{t('Volatility')}</p>
                <p className={s.textOneside}>{t('Platforms_button')}</p>
              </div>

              <div className={s.one_side}>
                <p className={s.textOtherside}>{item.release_date}</p>
                <p className={s.textOtherside}>{CurrentGenreGame}</p>
                <p className={s.textOtherside}>{item.min_bet}</p>
                <p className={s.textOtherside}>{item.max_bet}</p>
                <p className={s.textOtherside}>{item.max_payout}</p>
                <p className={s.textOtherside}>{item.reels}</p>
                <p className={s.textOtherside}>{item.rows}</p>
                <p className={s.textOtherside}>{item.pay_lines}</p>
                <p className={s.textOtherside}>{item.rtp}</p>
                <p className={s.textOtherside}>{CurrentVolatilityGame}</p>
                <p className={s.textOtherside}>{CurrentPlatformsGame}</p>
              </div>
            </div>

            <CasinoForGames/>
          </div>
        </div>
      </animated.div>
      {/* {isModalCasinoOpen === true ? <InfoCasino /> : ''} */}
      <ModalDataCasino />
    </Container>
  );
};
