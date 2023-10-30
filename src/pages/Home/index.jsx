import React from 'react'
import { Games } from '../../components/gamesData'
import { Container } from '@mui/material'
import { SearchButtons } from '../../components/searchButtons'
import { ModalDataGames } from '../../components/modalDataGames'

export const Home = () => {
  return (
    <>
      <h3 className="title">Лицензионные онлайн казино в России</h3>
      <SearchButtons/>
      <Games />
      <ModalDataGames/>
    </>

  )
}
