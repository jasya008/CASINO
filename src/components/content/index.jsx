import React, { useEffect, useState } from 'react';
import { InfoCasino } from '../infoCasino';
import { GetContext } from '../context/Context';

export const Content = () => {
  const { search, filteredCasino, lang } = GetContext();
  const [ResultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    filteredCasino?.forEach((item) => {
      const element = item;
      element.casino_name[lang]?.filter((item) => {
        if (item.toLowerCase().includes(search.toLowerCase())) {
          setResultSearch([element]);
        }
      });
    });
  }, [search]);


  return (
    <>
      {search.trim() === ''
        ? filteredCasino.map((game) => {
            return <InfoCasino key={game.id} data={game} />;
          })
        : ResultSearch.map((game) => {
            return <InfoCasino key={game.id} data={game} />;
          })}
    </>
  );
};
