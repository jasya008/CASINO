import React from 'react';
import { InfoCasino } from '../infoCasino';
import { GetContext } from '../context/Context';
// import { ModalCasino } from '../modalCasino';

export const Content = () => {
  const { dataCasino } = GetContext();
  return (
    <>
      {dataCasino.map((game) => (
        <InfoCasino key={game.id} data={game} />
      ))}

      {/* {dataCasino && <ModalCasino />} */}
    </>
  );
};
