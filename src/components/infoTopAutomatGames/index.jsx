import React from 'react'
import person from '../../assets/person.svg'
import warning from "../../assets/!.svg"
import s from './index.module.scss'

export const InfoTopAutomatGames = ({data}) => {
  return (
    <div className={s.TopAutomatGames}>
      <img className={s.img} src={data.img} alt="" />
      <div className={s.all_texts}>
        <p className={s.text}> <img src={warning} alt="" />Информация</p>
        <p className={s.text}> <img src={person} alt="" /> Отзывы</p>
      </div>
    </div>
  )
}
