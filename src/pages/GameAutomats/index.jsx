import React from 'react'
import s from './index.module.scss'
import img from '../../assets/automat.png'
import { Container } from '@mui/material'
import { AutomatsData } from '../../components/automatsData'
import { ButtonsAutomat } from '../../components/buttonsAutomat'
import { TopAutomatGames } from '../../components/TopAutomatGames'
import { ReviewsData } from '../../components/modalReviewsData'

export const GamesAutomats = () => {
  return (
    <Container fixed>
      <div className={s.GamesAutomats}>
        <div className={s.texts}>
          <h1 className={s.title}>ИГРАЙ И ПОЛУЧАЙ <span>РЕАЛЬНЫЕ ПРИЗЫ</span></h1>
          <p className={s.text}>Самый лучший сайт с самыми лучшими играми и реальными призами</p>
        </div>
        <img className={s.img} src={img} alt="" />
      </div>

      <div className={s.lineText}>
        <div className={s.line}></div>
        <p className={s.text}>Игры недели</p>
        <div className={s.line}></div>

      </div>

      <TopAutomatGames />

      <ButtonsAutomat />

      <AutomatsData />

      <ReviewsData />

    </Container>

  )
}
