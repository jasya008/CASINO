import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';

export const ButtonsAutomat = () => {
  const { t } = useTranslation();
  const { dataGames, setfilteredGames } = GetContext();
  const [activeButton, setActiveButton] = useState('All');

  const filterGames = (catGames) => {
    const updataGames = dataGames.filter((curGame) => {
      return curGame.sorting_criteria == catGames;
    });
    setfilteredGames(updataGames);
    setActiveButton(catGames);
  };

  useEffect(() => {
    setActiveButton('All');
    setfilteredGames(dataGames);
  }, [dataGames, setfilteredGames]);

  return (
    <Container fixed>
      <div className={s.buttons}>
        <button
          className={`${s.button} ${activeButton == 'All' ? s.active : ''}`}
          onClick={() => {
            setfilteredGames(dataGames);
            setActiveButton('All');
          }}
        >
          {t('All_button')}
        </button>
        <button
          className={`${s.button} ${
            activeButton === 'The Best' ? s.active : ''
          }`}
          onClick={() => filterGames('The Best')}
        >
          {t('bests_button')}
        </button>
        <button
          className={`${s.button} ${
            activeButton === 'Volcanoes' ? s.active : ''
          }`}
          onClick={() => filterGames('Volcanoes')}
        >
          {t('Volcanoes_button')}
        </button>
        <button
          className={`${s.button} ${
            activeButton === 'Cryptocurrencies' ? s.active : ''
          }`}
          onClick={() => filterGames('Cryptocurrencies')}
        >
          {t('Cryptocurrencies_button')}
        </button>
        <button
          className={`${s.button} ${activeButton === 'New' ? s.active : ''}`}
          onClick={() => filterGames('New')}
        >
          {t('new_button')}
        </button>
        <button
          className={`${s.button} ${
            activeButton === 'Countries' ? s.active : ''
          }`}
          onClick={() => filterGames('Countries')}
        >
          {t('Countries_button')}
        </button>
        <button
          className={`${s.button} ${
            activeButton === 'Currencies' ? s.active : ''
          }`}
          onClick={() => filterGames('Currencies')}
        >
          {t('Currencies_button')}
        </button>
      </div>
    </Container>
  );
};
