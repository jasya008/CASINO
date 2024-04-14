import React, { useEffect, useState } from 'react';
import { ModalGames } from '../modalGames';
import { InfoAutomats } from '../infoAutomats';
import { GetContext } from '../context/Context';
import { Container } from '@mui/material';
import { ModalGamesCasino } from '../ModalGamesCasino';

export const AutomatsData = () => {
  const { filteredGames, search, lang } = GetContext();
  const [gamesSearch, setGamesSearch] = useState([]);

  useEffect(() => {
    const filteredResults = filteredGames?.filter((item) =>
      item.game_name[lang].toLowerCase().includes(search.toLowerCase())
    );
    setGamesSearch(filteredResults || []);
  }, [filteredGames, search, lang]);

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
              gamesSearch.map((automats) => (
                <InfoAutomats key={automats.id} dataGames={automats} />
              ))
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
          <ModalGamesCasino />
        </div>
      </Container>
    </>
  );
};
