import React from 'react';
import person from '../../assets/person.svg';
import warning from '../../assets/!.svg';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';
import { Link } from 'react-router-dom';

export const InfoTopAutomatGames = ({ dataGameWeek }) => {
  const { t } = useTranslation();
  const { setModalOpenGame, setChooseGame } = GetContext();
  return (
    <div className={s.TopAutomatGames}>
      <img className={s.img} src={dataGameWeek.image_link} alt='' />
      <div className={s.all_texts}>
        <p
          className={s.text}
          onClick={() => {
            setModalOpenGame(true), setChooseGame(dataGameWeek);
          }}
        >
          {' '}
          <img src={warning} alt='' />
          {t('information')}
        </p>

        <Link className={s.text_mobile} onClick={setChooseGame(dataGameWeek)} to={`/gamesOfWeek/${dataGameWeek.id}`}>
          <img src={warning} alt='' />
          {t('information')}
        </Link>
      </div>
    </div>
  );
};
