import React from 'react';
import { CasinoData } from '../../components/casinoData';
import { SearchButtons } from '../../components/searchButtons';
import { ModalDataCasino } from '../../components/modalDataCasino';
import { useTranslation } from 'react-i18next';


export const Home = () => {
  const { t } = useTranslation();
  // const { data } = GetContext();

  return (
    <>
      <h3 className='title'>{t('title')}</h3>
      <SearchButtons />
      <CasinoData />
      <ModalDataCasino />
    </>
  );
};
