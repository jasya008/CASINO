import React from 'react';
import s from './index.module.scss';
import person from '../../assets/person.svg';
import warning from '../../assets/!.svg';
import { GetContext } from '../context/Context';
import { useTranslation } from 'react-i18next';

export const InfoAutomats = ({ dataGames }) => {
  const { setModalOpen, setChooseGame } = GetContext();
  const { t } = useTranslation();

  return (
    <div className={s.cardAutomat}>
      <img className={s.img} src={dataGames.image_link} alt='' />
      <div className={s.all_texts}>
        <p
          onClick={() => {
            setModalOpen(true);
            setChooseGame(dataGames);
          }}
          className={s.text}
        >
          {' '}
          <img src={warning} alt='' />
          {t('information')}
        </p>
          {/* <p className={s.text}>
            {' '}
            <img src={person} alt='' /> {t('Reviews')}
          </p> */}
      </div>
    </div>
  );
};
