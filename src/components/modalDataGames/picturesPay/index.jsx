import React from 'react'
import firstPicture from '../../../assets/mir.png'
import secondPicture from '../../../assets/sbp.png'
import thirdPicture from '../../../assets/visa.png'
import s from './index.module.scss'


export const PicturesPay = () => {
  return (
    <div className={s.all_payCards}>
      <div className={s.card}>
        <img className={s.img} src={firstPicture} alt="" />
      </div>
      <div className={s.card}>
        <img  className={s.img}src={secondPicture} alt="" />
      </div>
      <div className={s.card}>
        <img  className={s.img}src={thirdPicture} alt="" />
      </div>

      <p className={s.number}>+ 12</p>
    </div>
  )
}
