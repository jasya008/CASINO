import React, { useContext, useEffect, useState } from 'react';
import s from './index.module.scss';
import { GetContext } from '../context/Context';
import star from '../../assets/star.svg';

export const CasinoForGames = () => {
  const { dataCasino, chooseGame: item, lang } = GetContext();
  const [casino1, setCasino1] = useState(null);
  const [casino2, setCasino2] = useState(null);

  let CurrentLangPromoText1 = '';
  let CurrentLangPromoText2 = '';

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

  if (casino1?.promo_text && casino1?.promo_text.length !== 0) {
    CurrentLangPromoText1 = casino1?.promo_text[lang]?.join(' ');
  } else {
    CurrentLangPromoText1 = 'error';
  }

  if (casino2?.promo_text && casino2?.promo_text.length !== 0) {
    CurrentLangPromoText2 = casino2?.promo_text[lang]?.join(' ');
  } else {
    CurrentLangPromoText2 = 'error';
  }

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
        <p className={s.text}>{CurrentLangPromoText1}</p>
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
        <p className={s.text}>{CurrentLangPromoText2}</p>
      </div>
    </div>
  );
};
