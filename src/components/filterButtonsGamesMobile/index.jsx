import React, { useState } from 'react';
import iconSort from '../../assets/sort.svg';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';
export const FilterBtnGamesMobile = () => {
  const { t } = useTranslation();
  const [openButtons, setOpenButtons] = useState(false);
  const { setfilteredGames, dataGames } = GetContext();

  const filterGames = (catGames) => {
    const updataGames = dataGames.filter((curGame) => {
      return curGame.sorting_criteria.includes(catGames);
    });
    setfilteredGames(updataGames);
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
                setfilteredGames(dataGames);
                setOpenButtons(false);
              }}
            >
              {t('All_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterGames('The Best');
                setOpenButtons(false);
              }}
            >
              {t('bests_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterGames('Volcanoes');
                setOpenButtons(false);
              }}
            >
              {t('Volcanoes_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterGames('Cryptocurrencies');
                setOpenButtons(false);
              }}
            >
              {t('Cryptocurrencies_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterGames('New');
                setOpenButtons(false);
              }}
            >
              {t('new_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterGames('Countries');
                setOpenButtons(false);
              }}
            >
              {t('Countries_button')}
            </button>
            <button
              className={s.button}
              onClick={() => {
                filterGames('Currencies');
                setOpenButtons(false);
              }}
            >
              {t('Currencies_button')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
