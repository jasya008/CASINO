import React from 'react'
import s from './index.module.scss'
import star from '../../assets/star.svg'
import person from '../../assets/person.svg'
import warning from "../../assets/!.svg"
import { GetContext } from '../context/Context'


export const InfoGames = ({ data }) => {

  const { setModalOpen} = GetContext()

  return (
    <div className={s.card} onClick={()=>setModalOpen(true)} >
      <p className={s.grade}><img src={star} alt="" />4.5</p>
      <img className={s.img} src={data.img} />
      <div className={s.all_texts}>
        <p className={s.text}> <img src={warning} alt="" />Информация</p>
        <p className={s.text}> <img src={person} alt="" /> Отзывы</p>
      </div>
    </div>
  )
}
