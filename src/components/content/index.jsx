import React, { useEffect, useState } from 'react';
import { InfoCasino } from '../infoCasino';
import { GetContext } from '../context/Context';
import { CasinoForGames } from '../casinoeForGames';

const Content = () => {
  const { search, filteredCasino, lang, dataCasino } = GetContext();
  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    filter();
  }, [search, dataCasino, lang]);

  const filter = () => {
    if (search.trim() !== '') {
      const filteredResults = filteredCasino.filter((item) => {
        const casinoNameMatch = item.casino_text[lang]?.some((text) =>
          text.toLowerCase().includes(search.toLowerCase())
        );
        const casinoTextMatch = item.casino_name[lang]?.some((name) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
  
        return casinoNameMatch || casinoTextMatch ;
      });

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
