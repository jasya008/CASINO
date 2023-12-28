import React from 'react';
import { InfoCasino } from '../infoCasino';
import { GetContext } from '../context/Context';
// import { ModalCasino } from '../modalCasino';

export const Content = () => {
  const { dataCasino, search } = GetContext();
  return (
    <>
      {dataCasino
        .filter((data) =>
          data.casino_name.toLowerCase().includes(search.toLowerCase())
        )
        .map((game) => (
          <InfoCasino key={game.id} data={game} />
        ))}

      {/* {dataCasino && <ModalCasino />} */}
    </>
  );
};
