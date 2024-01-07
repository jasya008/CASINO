import React from 'react';
import s from './index.module.scss';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';

export const ButtonsAutomat = () => {
  const { t } = useTranslation();
  const { dataGames, setfilteredGames } = GetContext();

  const filterGames = (catGames) => {
    const updataGames = dataGames.filter((curGame) => {
      return curGame.sorting_criteria == catGames;
    });
    setfilteredGames(updataGames);
  };


  return (
    <Container fixed>
      <div className={s.buttons}>
        <button
          className={s.button}
          onClick={() => setfilteredGames(dataGames)}
        >
          {t("All_button")}
        </button>
        <button className={s.button} onClick={() => filterGames('The Best')}>
         {t("bests_button")}
        </button>
        <button className={s.button} onClick={() => filterGames('Volacnoes')}>
          {t("Volcanoes_button")}
        </button>
        <button
          className={s.button}
          onClick={() => filterGames('Cryptocurrencies')}
        >
          {t("Cryptocurrencies_button")}
        </button>
        <button className={s.button} onClick={() => filterGames('New')}>
          {t("new_button")}
        </button>
        <button className={s.button} onClick={() => filterGames('Countries')}>
          {t("Countries_button")}
        </button>
        <button
          className={s.button}
          onClick={() => filterGames('Currencies')}
        >
          {t("Currencies_button")}
        </button>
      </div>
    </Container>
  );
};

