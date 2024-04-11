import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../../components/context/Context';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import iconTrophy from '../../assets/Trophy.svg';
import star from '../../assets/bigStar.svg';
import axios from 'axios';
import { CasinoForGamesOfWK } from '../../components/casinoeForGamesOfWK';

export const GamesOfWeekPage = () => {
  const [game, setGame] = useState([]);
  const { lang } = GetContext();
  const [error, setError] = useState('');
  const [gameObj, setGameObj] = useState({});
  const { t } = useTranslation();
  const { id } = useParams();

  let CurrentTextGameofWeeek = '';
  let CurrentGenreGameofWeeek = '';
  let CurrentVolatilityGameofWeeek = '';
  let CurrentPlatformsGameofWeeek = '';

  const API_URL = 'http://127.0.0.1:8000/games-of-week/';

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

  // GamesOfWeek Text

  if (gameObj?.game_text && gameObj?.game_text.length !== 0) {
    CurrentTextGameofWeeek = gameObj?.game_text[lang];
  } else {
    CurrentTextGameofWeeek = 'error';
  }

  // GamesOfWeek Genre

  if (gameObj?.genre && gameObj?.genre.length !== 0) {
    CurrentGenreGameofWeeek = gameObj?.genre[lang];
  } else {
    CurrentGenreGameofWeeek = 'error';
  }

  // GamesOfWeek Volatility

  if (gameObj?.volatility && gameObj?.volatility.length !== 0) {
    CurrentVolatilityGameofWeeek = gameObj?.volatility[lang];
  } else {
    CurrentVolatilityGameofWeeek = 'error';
  }

  // Game PLatform

  if (game?.platforms && game?.platforms.length !== 0) {
    CurrentPlatformsGameofWeeek = game?.platforms[lang];
  } else {
    CurrentPlatformsGameofWeeek = 'error';
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
              <p className={s.textOtherside}> {CurrentVolatilityGameofWeeek}</p>
              <p className={s.textOtherside}> {CurrentPlatformsGameofWeeek}</p>
            </div>
          </div>
          <CasinoForGamesOfWK />
        </div>

        <p className={s.text}> {CurrentTextGameofWeeek}</p>

        <button className={s.button}>{t('buttonGame_text')}</button>
      </div>
    </Container>
  );
};
