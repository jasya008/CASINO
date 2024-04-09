import React, { useEffect, useState } from 'react';
import { InfoCasino } from '../infoCasino';
import { GetContext } from '../context/Context';

const Content = () => {
  const { search, filteredCasino, lang, dataCasino } = GetContext();
  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    filter();
  }, [search, dataCasino, lang]);

  const filter = () => {
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
  };

  const renderCasinoList = (casinos) => {
    return casinos.map((game) => <InfoCasino key={game.id} data={game} />);
  };

  return (
    <>
      {/* {filteredCasino.length && renderCasinoList(dataCasino)} */}

      
      {filteredCasino && filteredCasino.length > 0 ? (
        search.trim() === '' ? (
          renderCasinoList(filteredCasino)
        ) : (
          renderCasinoList(resultSearch)
        )
      ) : (
        <p
          style={{
            color: 'white',
            fontFamily: 'var(--font)',
            fontSize: '30px',
          }}
        >
          No casinos found
        </p>
      )}
    </>
  );
};

export default Content;
