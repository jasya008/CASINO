import React from 'react'
import s from './index.module.scss'
import { Container } from '@mui/material'
import instagram from "../../assets/instagram.svg"
import facebook from '../../assets/facebook.svg'
import vk from '../../assets/vk.svg'

export const Footer = () => {
  return (
    <Container fixed>
      <footer className={s.footer}>
        <h3 className={s.logo} >CASINO</h3>
        <p className={s.text}>Сайт использует IP адреса, сookie и данные геолокации пользователей сайта</p>

        <div className={s.icons}>
          <img src={vk} className={s.icon} alt="" />
          <img src={instagram} className={s.icon} alt="" />
          <img src={facebook} className={s.icon} alt="" />
        </div>

      </footer>
    </Container>
  )
}
