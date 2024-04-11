import React, { useContext, useEffect, useState } from 'react';
import s from './index.module.scss';
import { GetContext } from '../context/Context';
import star from '../../assets/star.svg';

export const CasinoForGamesOfWK = () => {
  const { dataCasino, chooseGamesWeek: item } = GetContext();
  const [casino1, setCasino1] = useState(null);
  const [casino2, setCasino2] = useState(null);

  console.log(item);

  useEffect(() => {
    const foundCasino1 = dataCasino.find(
      (casino) => casino.id === item.casino_id_1
    );
    setCasino1(foundCasino1);

    const foundCasino2 = dataCasino.find(
      (casino) => casino.id === item.casino_id_2
    );
    setCasino2(foundCasino2);
  }, [dataCasino, item]);

  return (
    <div className={s.cards}>
      <div className={s.card}>
        {casino1 && (
          <p className={s.grade}>
            <img className={s.star} src={star} alt='' />
            {casino1.editor_rating}
          </p>
        )}
        {casino1 && (
          <img
            className={s.casinoImage}
            src={casino1.image_link}
            alt='Casino 1'
          />
        )}
        <p className={s.text}>iukkjhj</p>
      </div>

      <div className={s.card}>
        {casino2 && (
          <p className={s.grade}>
            <img className={s.star} src={star} alt='' />
            {casino2.editor_rating}
          </p>
        )}
        {casino2 && (
          <img
            className={s.casinoImage}
            src={casino2.image_link}
            alt='Casino 2'
          />
        )}
        <p className={s.text}>nefhbdjbh</p>
      </div>
    </div>
  );
};
