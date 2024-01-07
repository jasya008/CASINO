import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';

export const FilterButtons = () => {
  const { t } = useTranslation();
  const { filteredCasino, setfilteredCasino, dataCasino } = GetContext();

  
  const filterItems = (catItem) => {
    const updateItems = dataCasino.filter((curItem) => {
      return curItem.sorting_criteria == catItem ;
    });
    setfilteredCasino(updateItems);
  };
  
  // const DemoFilterFunc = (array = [], checkValue) => {
    //   array.filter(item => {
    //     item.creatories.forEach((elem) => {
    //       if(item.name.includes(checkValue) || elem.includes(checkValue)){
    //         console.log(item);
    //       }
    //     })
        
    //   })
    // }
    
  // const demoFilter = [
  //   {
  //     id: 1,
  //     name: 'test 1',
  //     creatories: ['good', 'ok'],
  //   },

  //   {
  //     id: 2,
  //     name: 'test 2',
  //     creatories: ['good', 'bad'],
  //   },
  // ];

  

  // DemoFilterFunc(demoFilter, "ok");

  return (
    <div className={s.searchButtons}>
      <button
        className={s.button}
        onClick={() => setfilteredCasino(dataCasino)}
      >
      {t("All_button")}
      </button>
      <button className={s.button} onClick={() => filterItems('Volcanoes')}>
        {t("Volcanoes_button")}
      </button>
      <button
        className={s.button}
        onClick={() => filterItems('Cryptocurrencies')}
      >
        {t("Currencies_button")}
      </button>
      <button className={s.button} onClick={() => filterItems('Platforms')}>
        {t("Platforms_button")}
      </button>
      <button className={s.button} onClick={() => filterItems('The best')}>
       {t("bests_button")}
      </button>
      <button className={s.button} onClick={() => filterItems('Countries')}>
        {t("Countries_button")}
      </button>
      <button className={s.button} onClick={() => filterItems('Currencies')}>
        {t("Currencies_button")}
      </button>
      <button className={s.button} onClick={() => filterItems('New')}>
        {t("new_button")}
      </button>
      <button className={s.button} onClick={() => filterItems('Peculiarties')}>
        {t("Peculiarities_button")}
      </button>
      <button className={s.button} onClick={() => filterItems('Black list')}>
       {t("Blacklist_button")}
      </button>
    </div>
  );
};
