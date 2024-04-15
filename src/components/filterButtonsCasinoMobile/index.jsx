import React, { useState } from 'react';
import s from './index.module.scss';
import iconSort from '../../assets/sort.svg';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';

export const FilterBtnCasinoMobile = () => {
  const { t } = useTranslation();
  const [openButtons, setOpenButtons] = useState(false);
  const { filteredCasino, setfilteredCasino, dataCasino } = GetContext();

  const filterItems = (catItem) => {
    const updateItems = dataCasino.filter((curItem) => {
      return curItem.sorting_criteria.includes(catItem);
    });
    setfilteredCasino(updateItems);
  };

  return (
    <>
      <p className={s.sortText} onClick={() => setOpenButtons(true)}>
        <img className={s.img_sort} src={iconSort} alt='' />
        {t('sort')}:
      </p>

      <div
        className={
          openButtons ? [s.Buttons, s.buttonsOpen].join(' ') : s.Buttons
        }
      >
        <div className='body'>
          <div className={s.searchButtons}>
            <button
              className={s.button}
              onClick={() => {
                setfilteredCasino(dataCasino);
                setOpenButtons(false);
              }}
            >
              {t('All_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterItems('Volcanoes');
                setOpenButtons(false);
              }}
            >
              {t('Volcanoes_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterItems('Cryptocurrencies');
                setOpenButtons(false);
              }}
            >
              {t('Currencies_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterItems('Platforms');
                setOpenButtons(false);
              }}
            >
              {t('Platforms_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterItems('The best');
                setOpenButtons(false);
              }}
            >
              {t('bests_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterItems('Countries');
                setOpenButtons(false);
              }}
            >
              {t('Countries_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterItems('Currencies');
                setOpenButtons(false);
              }}
            >
              {t('Currencies_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterItems('New');
                setOpenButtons(false);
              }}
            >
              {t('new_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterItems('Peculiarties');
                setOpenButtons(false);
              }}
            >
              {t('Peculiarities_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterItems('Black list');
                setOpenButtons(false);
              }}
            >
              {t('Blacklist_button')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

