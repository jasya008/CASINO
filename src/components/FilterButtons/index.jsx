import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';

export const FilterButtons = () => {
  const { t } = useTranslation();
  const { dataCasino } = GetContext();
  const [items, setItems] = useState(dataCasino);

  // const filterCasinoButtons = [
  //   ...new Set(dataCasino.map((val) => val.sorting_criteria)),
  // ];

  // const CasinoFilter = (casino) => {
  //   const newCasino = dataCasino.filter(
  //     (newval) => newval.sorting_criteria === casino
  //   );

  //   setFilteredItems(newCasino);
  // };

  const filterItems = (catItem) => {
    const updateItems = dataCasino.filter((curItem) => {
      return curItem.sorting_criteria == catItem;
    });
    setItems(updateItems);
  };  

  console.log(items);

  return (
    <div className={s.searchButtons}>
      <button className={s.button} onClick={() => setItems(dataCasino)}>
        All
      </button>
      <button className={s.button} onClick={() => filterItems('Volcanoes')}>
        Volcanoes
      </button>
      <button
        className={s.button}
        onClick={() => filterItems('Cryptocurrencies')}
      >
        Cryptocurrencies
      </button>
      <button className={s.button} onClick={() => filterItems('Platforms')}>
        Platforms
      </button>
      <button className={s.button} onClick={() => filterItems('The best')}>
        The best
      </button>
      <button className={s.button} onClick={() => filterItems('Countries')}>
        Countries
      </button>
      <button className={s.button} onClick={() => filterItems('Currencies')}>
        Currencies
      </button>
      <button className={s.button} onClick={() => filterItems('New')}>
        New
      </button>
      <button className={s.button} onClick={() => filterItems('Peculiarties')}>
        Peculiarties
      </button>
      <button className={s.button} onClick={() => filterItems('Black list')}>
        Black list
      </button>
    </div>
  );
};
