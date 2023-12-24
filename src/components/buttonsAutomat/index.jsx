import React from 'react';
import s from './index.module.scss';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';

export const ButtonsAutomat = () => {
  const { t } = useTranslation();
  const { dataGames, setFilteredGames } = GetContext();

  const filterButtonsGame = [
    ...new Set(dataGames.map((val) => val.sorting_criteria)),
  ];

  const GamesFilter = (game) => {
    const newGame = dataGames.filter(
      (newval) => newval.sorting_criteria === game
    );

    setFilteredGames(newGame);
  };

  return (
    <Container fixed>
      <div className={s.buttons}>
        <button
          onClick={() => setFilteredGames(dataGames)}
          className={s.button}
        >
          All
        </button>
        {filterButtonsGame.map((val) => (
          <button onClick={() => GamesFilter(val)} className={s.button}>
            {val}
          </button>
        ))}
      </div>
    </Container>
  );
};

{

}
