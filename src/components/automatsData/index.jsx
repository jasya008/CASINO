import React, { useEffect, useState } from 'react';
import { ModalGames } from '../modalGames';
import { InfoAutomats } from '../infoAutomats';
import { GetContext } from '../context/Context';
import { Container } from '@mui/material';

export const AutomatsData = () => {
  const { filteredGames, search, lang, dataGames } = GetContext();
  const [gamesSearch, setGamesSearch] = useState([]);

  useEffect(() => {
    filteredGames?.forEach((item) => {
      const element = item;
      const result = element.game_name[lang]
        .toLowerCase()
        .includes(search.toLowerCase());
      if (result) {
        setGamesSearch([element]);
      }
    });
  }, [search]);

  const renderGameList = (games) => {
    return games.map((automats) => (
      <InfoAutomats key={automats.id} dataGames={automats} />
    ));
  };

  return (
    <>
      <Container fixed id='gamesSection'>
        <div className='cardsAutomats'>
          {filteredGames && filteredGames.length > 0 ? (
            search.trim() === '' ? (
              renderGameList(filteredGames)
            ) : (
              renderGameList(gamesSearch)
            )
          ) : (
            <p
              style={{
                color: 'white',
                fontFamily: 'var(--font)',
                fontSize: '30px',
              }}
            >
              No games found
            </p>
          )}
          <ModalGames />
        </div>
      </Container>
    </>
  );
};
