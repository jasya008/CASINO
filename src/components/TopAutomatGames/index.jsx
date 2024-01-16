import React, { useEffect, useState } from 'react';
import { InfoTopAutomatGames } from '../infoTopAutomatGames';
import axios from 'axios';
import { GetContext } from '../context/Context';
import { ModalGamesOfWeek } from '../modalGamesOfWeek';
import { ModalDataCasino } from '../modalDataCasino';

export const TopAutomatGames = () => {
  const [data, setData] = useState([]);

  const API_URL = 'http://127.0.0.1:8000/games-of-week/';

  const getDataGamesWeek = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDataGamesWeek();
  }, []);

  return (
    <div className='cards'>
      {data.map((game) => (
        <InfoTopAutomatGames key={game.id} dataGameWeek={game} />
      ))}

      <ModalDataCasino />
    </div>
  );
};