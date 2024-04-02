import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';

export const FilterButtons = () => {
  const { t } = useTranslation();
  const { filteredCasino, setfilteredCasino, dataCasino } = GetContext();
  const [activeButton, setActiveButton] = useState('All');

  const filterItems = (catItem) => {
    const updateItems = dataCasino.filter((curItem) => {
      return curItem.sorting_criteria == catItem;
    });
    
    setfilteredCasino(updateItems);
    setActiveButton(catItem);
  };


  

  return (
    <>
      <div className={s.searchButtons}>
        <button
          className={`${s.button} ${activeButton == 'All' ? s.active : ''}`}
          onClick={() => {
            setfilteredCasino(dataCasino);
            setActiveButton('All');
          }}
        >
          {t('All_button')}
        </button>
        <button
          className={`${s.button} ${
            activeButton === 'Volcanoes' ? s.active : ''
          }`}
          onClick={() => filterItems('Volcanoes')}
        >
          {t('Volcanoes_button')}
        </button>
        <button
          className={`${s.button} ${
            activeButton === 'Cryptocurrencies' ? s.active : ''
          }`}
          onClick={() => filterItems('Cryptocurrencies')}
        >
          {t('Cryptocurrencies_button')}
        </button>
        <button
          className={`${s.button} ${
            activeButton === 'Platforms' ? s.active : ''
          }`}
          onClick={() => filterItems('Platforms')}
        >
          {t('Platforms_button')}
        </button>
        <button
          className={`${s.button} ${
            activeButton === 'The best' ? s.active : ''
          }`}
          onClick={() => filterItems('The best')}
        >
          {t('bests_button')}
        </button>

        <button
          className={`${s.button} ${
            activeButton === 'Countries' ? s.active : ''
          }`}
          onClick={() => filterItems('Countries')}
        >
          {t('Countries_button')}
        </button>
        <button
          className={`${s.button} ${
            activeButton === 'Currencies' ? s.active : ''
          }`}
          onClick={() => filterItems('Currencies')}
        >
          {t('Currencies_button')}
        </button>
        <button
          className={`${s.button} ${activeButton === 'New' ? s.active : ''}`}
          onClick={() => filterItems('New')}
        >
          {t('new_button')}
        </button>
        <button
          className={`${s.button} ${
            activeButton === 'Peculiarties' ? s.active : ''
          }`}
          onClick={() => filterItems('Peculiarties')}
        >
          {t('Peculiarities_button')}
        </button>
        <button
          className={`${s.button} ${
            activeButton === 'Black list' ? s.active : ''
          }`}
          onClick={() => filterItems('Black list')}
        >
          {t('Blacklist_button')}
        </button>
      </div>
    </>
  );
};
