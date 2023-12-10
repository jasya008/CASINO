import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ModalGames } from '../modalGames';
import { InfoAutomats } from '../infoAutomats';
import { GetContext } from '../context/Context';

export const AutomatsData = () => {
  const { dataGames } = GetContext();
  
  return (
    <div className='cardsAutomats'>
      {dataGames.map((automats) => (
        <InfoAutomats key={automats.id} dataGames={automats} />
      ))}

      <ModalGames />
    </div>
  );
};
