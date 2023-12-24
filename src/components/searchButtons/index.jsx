import React, { useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';

export const SearchButtons = () => {
  const { t } = useTranslation();
  const { dataCasino,  setFilteredItems } = GetContext();
  // const [filteredeItems, setFilteredItems] = useState(dataCasino);

  const filterCasinoButtons = [
    ...new Set(dataCasino.map((val) => val.sorting_criteria)),
  ];

  const CasinoFilter = (casino) => {
    const newCasino = dataCasino.filter(
      (newval) => newval.sorting_criteria === casino
    );

    setFilteredItems(newCasino);
  };


  return (
    <div className={s.searchButtons}>
      <button onClick={() => setFilteredItems(dataCasino)} className={s.button}>
        All
      </button>
      {filterCasinoButtons.map((val) => (
        <button onClick={() => CasinoFilter(val)} className={s.button}>
          {val}
        </button>
      ))}
    </div>
  );
};

