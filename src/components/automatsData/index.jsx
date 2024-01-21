import React, { useEffect, useState } from 'react';
import { ModalGames } from '../modalGames';
import { InfoAutomats } from '../infoAutomats';
import { GetContext } from '../context/Context';

export const AutomatsData = () => {
  const { filteredGames, search, lang } = GetContext();
  const [gamesSearch, setGamesSearch] = useState([]);

  useEffect(() => {
    filteredGames.forEach((item) => {
      const element = item;
      element.game_name[lang].filter((item) => {
        if (item.toLowerCase().includes(search.toLowerCase())) {
          setGamesSearch(element);
        }
      });
    });
  }, [search]);


  return (
    <div className='cardsAutomats'>
      {search.trim() === ''
        ? filteredGames.map((automats) => {
            return <InfoAutomats key={automats.id} dataGames={automats} />;
          })
        : gamesSearch.map((automats) => {
            return <InfoAutomats key={automats.id} dataGames={automats} />;
          })}
      <ModalGames />
    </div>
  );
};
