import React from 'react';
import { InfoCasino } from '../infoCasino';
import { GetContext } from '../context/Context';
// import { ModalCasino } from '../modalCasino';

export const Content = () => {
  const {  search, filteredCasino } = GetContext();
  return (
    <>
      {filteredCasino
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
