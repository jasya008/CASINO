import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../../components/context/Context';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import iconTrophy from '../../assets/Trophy.svg';
import star from '../../assets/bigStar.svg';
import axios from 'axios';
import { CasinoForGames } from '../../components/casinoeForGames';
import { ModalGamesCasino } from '../../components/ModalGamesCasino';

export const GamePage = () => {
  const [game, setGame] = useState([]);
  const { lang, setModalGamesCasino } = GetContext();
  const [error, setError] = useState('');
  const [gameObj, setGameObj] = useState({});
  const { t } = useTranslation();
  const { id } = useParams();

  let CurrentTextGame = '';
  let CurrentGenreGame = '';
  let CurrentVolatilityGame = '';
  let CurrentPlatformsGame = '';

  const API_URL = 'http://127.0.0.1:8000/all-game-profiles/';

  const getDataGames = async () => {
    try {
      const { data } = await axios(API_URL);
      setGame(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getDataGames();

    for (const index of game) {
      if (index.id == id) {
        setGameObj(index);
        break;
      }
    }
  }, [game.length, id, game.id]);

  if (gameObj?.game_text && gameObj?.game_text.length !== 0) {
    CurrentTextGame = gameObj?.game_text[lang];
  } else {
    CurrentTextGame = 'error';
  }

  // Game Genre
  if (gameObj?.genre && gameObj?.genre.length !== 0) {
    CurrentGenreGame = gameObj?.genre[lang];
  } else {
    CurrentGenreGame = 'error';
  }

  // Game Volatility
  if (gameObj?.volatility && gameObj?.volatility.length !== 0) {
    CurrentVolatilityGame = gameObj?.volatility[lang];
  } else {
    CurrentVolatilityGame = 'error';
  }

  // Game PLatform
  if (gameObj?.platforms && gameObj?.platforms.length !== 0) {
    CurrentPlatformsGame = gameObj?.platforms[lang];
  } else {
    CurrentPlatformsGame = 'error';
  }

  return (
    <Container>
      <div className={s.pageGames}>
        <div className={s.topContent}>
          <div className={s.imageText}>
            <p className={s.estimate_text}>
              <img className={s.iconTrophy} src={iconTrophy} alt='' />
              {gameObj.ranking_position}
              {t('rank')}
            </p>
            <img className={s.imgAutomat} src={gameObj.image_link} alt='' />
          </div>

          <div className={s.grade}>
            <p className={s.estimate}>
              {' '}
              <img src={star} alt='' className={s.star} /> {}
              {gameObj.editor_rating}
            </p>
            <p className={s.text_grade}>{t('grade')}</p>
          </div>
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
              <p className={s.textOtherside}> {gameObj.release_date}</p>
              <p className={s.textOtherside}> {gameObj.CurrentGenreGame}</p>
              <p className={s.textOtherside}> {gameObj.min_bet}</p>
              <p className={s.textOtherside}> {gameObj.max_bet}</p>
              <p className={s.textOtherside}> {gameObj.max_payout}</p>
              <p className={s.textOtherside}> {gameObj.reels}</p>
              <p className={s.textOtherside}> {gameObj.rows}</p>
              <p className={s.textOtherside}> {gameObj.pay_lines}</p>
              <p className={s.textOtherside}> {gameObj.rtp}</p>
              <p className={s.textOtherside}> {CurrentVolatilityGame}</p>
              <p className={s.textOtherside}> {CurrentPlatformsGame}</p>
            </div>
          </div>

          <CasinoForGames />
        </div>

        <p className={s.text}> {CurrentTextGame}</p>

        <button onClick={() => setModalGamesCasino(true)} className={s.button}>
          {t('buttonGame_text')}
        </button>
      </div>

      <ModalGamesCasino />
    </Container>
  );
};
