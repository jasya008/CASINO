import React from 'react';
import { useTranslation } from 'react-i18next';
import searchIcon from '../../assets/SearchOutlined.svg';
import { GetContext } from '../context/Context';

export const SearchBar = () => {
  const { t } = useTranslation();
  const { search, setSearch } = GetContext()

  const onSearchInputChange = (e) => setSearch(e.target.value);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className='inputIcon'>
        <input
          className='searchbar'
          type='text'
          id='search'
          autoComplete='off'
          value={search}
          onChange={onSearchInputChange}
          placeholder={t('searchbar_placeholder')}
        />

        <img src={searchIcon} className='icon' alt='' />
      </div>
    </form>
  );
};
