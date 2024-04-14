import React, { useEffect } from 'react';
import s from './index.module.scss';
import person from '../../assets/person.svg';
import warning from '../../assets/!.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GetContext } from '../context/Context';

export const InfoAutomats = ({ dataGames }) => {
  const { setChooseGame, setModalOpenGame } = GetContext();
  const { t } = useTranslation();

  return (
    <div className={s.cardAutomat}>
      <img className={s.img} src={dataGames.image_link} alt='' />
      <div className={s.all_texts}>
        <p
          onClick={() => {
            setModalOpenGame(true);
            setChooseGame(dataGames);
          }}
          className={s.text}
        >
          {' '}
          <img src={warning} alt='' />
          {t('information')}
        </p>
        <Link
          className={s.text_mobile}
          onClick={() => setChooseGame(dataGames)}
          to={`/game/${dataGames.id}`}
        >
          <img src={warning} alt='' />
          {t('information')}
        </Link>
      </div>
    </div>
  );
};
