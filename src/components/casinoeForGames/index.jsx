import React, { useContext, useEffect, useState } from 'react';
import s from './index.module.scss';
import { GetContext } from '../context/Context';
import star from '../../assets/star.svg';
import { ModalCasino1 } from './ModalCasino1';
import { Link } from 'react-router-dom';

export const CasinoForGames = () => {
  const {
    dataCasino,
    chooseGame: item,
    lang,
    setModalOpenGame,
    setOpenCasino2Modal,
    setOpenCasino1Modal,
    casino1,
    setCasino1,
    casino2,
    setCasino2,
  } = GetContext();

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
    <>
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
          <p
            className={s.text}
            onClick={() => {
              setOpenCasino1Modal(true);
              setModalOpenGame(false);
            }}
          >
            {CurrentLangPromoText1}
          </p>
          <Link className={s.LinkText} to={'/gamesCasino1'}>
            {CurrentLangPromoText1}
          </Link>
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
          <p
            className={s.text}
            onClick={() => {
              setOpenCasino2Modal(true);
              setModalOpenGame(false);
            }}
          >
            {CurrentLangPromoText2}
          </p>
          <Link className={s.LinkText} to={'/gamesCasino2'}>
            {CurrentLangPromoText2}
          </Link>
        </div>
      </div>
    </>
  );
};
