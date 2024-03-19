import React, { useEffect, useState } from 'react';
import { ModalGames } from '../modalGames';
import { InfoAutomats } from '../infoAutomats';
import { GetContext } from '../context/Context';

export const AutomatsData = () => {
  const { filteredGames, search, lang } = GetContext();
  const [gamesSearch, setGamesSearch] = useState([]);
  // const [filteredGames, setFilteredGames] = useState();


  useEffect(() => {
    filteredGames?.forEach((item) => {
      const element = item;
      // console.log(element);
      // console.log(element.game_name[lang]);
      const result = element.game_name[lang]
        .toLowerCase()
        .includes(search.toLowerCase());
      if (result) {
        setGamesSearch([element]);
      }
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
