import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../../components/context/Context';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import iconTrophy from '../../assets/Trophy.svg';
import star from '../../assets/bigStar.svg';

export const GamePage = () => {
  const [game, setGame] = useState([]);
  const { lang } = GetContext();
  const [error, setError] = useState('');
  const [gameObj, setGameObj] = useState({});
  const { t } = useTranslation();
  const { id } = useParams();

  const API_URL = 'http://127.0.0.1:8000/all-game-profiles';

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

  return (
    <Container>
      <div className={s.pageGames}>
        <div className={s.topContent}>
          <div className={s.imageText}>
            <p className={s.estimate_text}>
              <img className={s.iconTrophy} src={iconTrophy} alt='' />
              {/* ranking_position */}
              {t('rank')}
            </p>
            <img className={s.imgAutomat} src='' alt='' />
            {/* image_link */}
          </div>

          <div className={s.grade}>
            <p className={s.estimate}>
              {' '}
              <img src={star} alt='' className={s.star} /> {}
              {/* editor_rating */}
            </p>
            <p className={s.text_grade}>{t('grade')}</p>
          </div>
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
            <p className={s.textOtherside}> smth{/* {release_date} */}</p>
            <p className={s.textOtherside}> smth{/* {CurrentGenreGame} */}</p>
            <p className={s.textOtherside}> smth{/* {min_bet} */}</p>
            <p className={s.textOtherside}> smth{/* {max_bet} */}</p>
            <p className={s.textOtherside}> smth{/* {max_payout} */}</p>
            <p className={s.textOtherside}> smth{/* {reels} */}</p>
            <p className={s.textOtherside}> smth{/* {rows} */}</p>
            <p className={s.textOtherside}> smth{/* {pay_lines} */}</p>
            <p className={s.textOtherside}> smth{/* {rtp} */}</p>
            <p className={s.textOtherside}>
              {' '}
              smth{/* {CurrentVolatilityGame} */}
            </p>
            <p className={s.textOtherside}>
              {' '}
              smth{/* {CurrentPlatformsGame} */}
            </p>
          </div>
        </div>

        <p className={s.text}> kfewjhkhrjehfjdhsjhefh Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati, sint earum natus quas optio, dolorum vero illum, aliquid tenetur expedita? Reprehenderit temporibus voluptatibus corporis natus laboriosam aspernatur doloribus repellat.{/* {CurrentTextGame} */}</p>

        <button className={s.button}>{t('buttonGame_text')}</button>
      </div>
    </Container>
  );
};
