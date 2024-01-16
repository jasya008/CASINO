import React, { useEffect, useState } from 'react';
import { ModalGames } from '../modalGames';
import { InfoAutomats } from '../infoAutomats';
import { GetContext } from '../context/Context';

export const AutomatsData = () => {
  const { filteredGames } = GetContext();

  return (
    <div className='cardsAutomats'>
      {filteredGames
        // .filter((game) =>
        //   game.game_name.toLowerCase().includes(search.toLowerCase())
        // )
        .map((automats) => (
          <InfoAutomats key={automats.id} dataGames={automats} />
        ))}

      <ModalGames />
    </div>
  );
};
