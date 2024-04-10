import React, { useContext, useEffect, useState } from 'react';
import s from './index.module.scss';
import { GetContext } from '../context/Context';

export const CasinoForGames = () => {
  const { dataCasino, dataGames } = GetContext();
  const [casino1, setCasino1] = useState(null);
  const [casino2, setCasino2] = useState(null);

  useEffect(() => {
    console.log('dataCasino:', dataCasino);
    console.log('dataGames:', dataGames);

    if (dataCasino.length > 0 && dataGames && dataGames.casino_id_1 !== undefined && dataGames.casino_id_2 !== undefined) {
      const foundCasino1 = dataCasino.find(casino => casino.id === dataGames.casino_id_1);
      setCasino1(foundCasino1);

      const foundCasino2 = dataCasino.find(casino => casino.id === dataGames.casino_id_2);
      setCasino2(foundCasino2);

      console.log('Found Casino 1:', foundCasino1);
      console.log('Found Casino 2:', foundCasino2);
    }
  }, [dataCasino, dataGames]);

  return (
    <div className={s.container}>
      <div>Casino ID 1: {casino1 ? casino1.image_link : 'Not Found'}</div>
      <div>Casino ID 2: {casino2 ? casino2.image_link : 'Not Found'}</div>
    </div>
  );
};
