import React from 'react';
import { CasinoData } from '../../components/casinoData';
import { ModalDataCasino } from '../../components/modalDataCasino';
import { useTranslation } from 'react-i18next';
import { FilterButtons } from '../../components/FilterButtons';
import { FilterBtnCasinoMobile } from '../../components/filterButtonsCasinoMobile';


export const Home = () => {
  const { t } = useTranslation();
  // const { data } = GetContext();

  return (
    <>
      <h3 className='title'>{t('title')}</h3>
      <FilterButtons />
      <FilterBtnCasinoMobile/>
      <CasinoData />
      <ModalDataCasino />
      
    </>
  );
};
