import React from 'react';
import s from './index.module.scss';
import iconTrophy from '../../assets/Trophy.svg';
import star from '../../assets/bigStar.svg';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { useSpring, animated } from 'react-spring';
import { GetContext } from '../context/Context';
import { CasinoForGamesOfWK } from '../casinoeForGamesOfWK';

export const ModalGamesOfWeek = () => {
  const { modalOpen, setModalOpen, chooseGamesWeek: game, lang } = GetContext();
  const { t } = useTranslation();

  let CurrentNameGameofWeeek = '';
  let CurrentTextGameofWeeek = '';
  let CurrentGenreGameofWeeek = '';
  let CurrentVolatilityGameofWeeek = '';
  let CurrentPlatformsGameofWeeek = '';

  // GamesOfWeek Name

  if (game?.game_name && game?.game_name.length !== 0) {
    CurrentNameGameofWeeek = game?.game_name[lang];
  } else {
    CurrentNameGameofWeeek = 'error';
  }

  // GamesOfWeek Text

  if (game?.game_text && game?.game_text.length !== 0) {
    CurrentTextGameofWeeek = game?.game_text[lang];
  } else {
    CurrentTextGameofWeeek = 'error';
  }

  // GamesOfWeek Genre

  if (game?.genre && game?.genre.length !== 0) {
    CurrentGenreGameofWeeek = game?.genre[lang];
  } else {
    CurrentGenreGameofWeeek = 'error';
  }

  // GamesOfWeek Volatility

  if (game?.volatility && game?.volatility.length !== 0) {
    CurrentVolatilityGameofWeeek = game?.volatility[lang];
  } else {
    CurrentVolatilityGameofWeeek = 'error';
  }

  // Game PLatform

  if (game?.platforms && game?.platforms.length !== 0) {
    CurrentPlatformsGameofWeeek = game?.platforms[lang];
  } else {
    CurrentPlatformsGameofWeeek = 'error';
  }

  const animation = useSpring({
    opacity: modalOpen ? 1 : 0,
    transform: modalOpen ? 'translateY(0%)' : 'translateY(-100%)',
  });

  return (
    <Container fixed>
      <animated.div style={animation} className='popup'>
        <div
          className={
            modalOpen ? [s.ModalAutomat, s.modalShow].join(' ') : s.ModalAutomat
          }
        >
          <div className={s.left_side}>
            <p className={s.estimate_text}>
              <img className={s.iconTrophy} src={iconTrophy} alt='' />
              {game.ranking_position}
              {t('rank')}
            </p>
            <img className={s.imgAutomat} src={game.image_link} alt='' />

            <p className={s.text}>{CurrentTextGameofWeeek}</p>

            <button className={s.button} onClick={() => handleCasinoOpen()}>
              {t('buttonGame_text')}
            </button>
          </div>

          <div className={s.right_side}>
            <div className={s.all_grade}>
              <CloseIcon
                className={s.icon}
                onClick={() => setModalOpen(false)}
              />
              <p className={s.estimate}>
                {' '}
                <img src={star} alt='' className={s.star} />{' '}
                {game.editor_rating}
              </p>
              <p className={s.text_grade}>{t('grade')}</p>
            </div>

            <div className={s.content}>
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
                  <p className={s.textOtherside}>{game.release_date}</p>
                  <p className={s.textOtherside}>{CurrentGenreGameofWeeek}</p>
                  <p className={s.textOtherside}>{game.min_bet}</p>
                  <p className={s.textOtherside}>{game.max_bet}</p>
                  <p className={s.textOtherside}>{game.max_payout}</p>
                  <p className={s.textOtherside}>{game.reels}</p>
                  <p className={s.textOtherside}>{game.rows}</p>
                  <p className={s.textOtherside}>{game.pay_lines}</p>
                  <p className={s.textOtherside}>{game.rtp}</p>
                  <p className={s.textOtherside}>
                    {CurrentVolatilityGameofWeeek}
                  </p>
                  <p className={s.textOtherside}>
                    {CurrentPlatformsGameofWeeek}
                  </p>
                </div>
              </div>
              <CasinoForGamesOfWK />
            </div>
          </div>
        </div>
      </animated.div>
    </Container>
  );
};
