import React, { useEffect, useState } from 'react';
import { InfoCasino } from '../infoCasino';
import { GetContext } from '../context/Context';

const Content = () => {
  const { search, filteredCasino, lang, dataCasino } = GetContext();
  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    if (search.trim() !== '') {
      const filteredResults = filteredCasino.filter((item) =>
        item.casino_name[lang]?.some((name) =>
          name.toLowerCase().includes(search.toLowerCase())
        )
      );
      setResultSearch(filteredResults);
    } else {
      setResultSearch([]);
    }
  }, [search, filteredCasino, lang]);

  const renderCasinoList = (casinos) => {
    return casinos.map((game) => <InfoCasino key={game.id} data={game} />);
  };

  return (
    <>
      {!filteredCasino.length && renderCasinoList(dataCasino)}
      {search.trim() === '' ? renderCasinoList(filteredCasino) : renderCasinoList(resultSearch)}
    </>
  );
};

export default Content;
