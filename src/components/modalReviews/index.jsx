import React from 'react'
import s from './index.module.scss'
import iconUser from '../../assets/iconUser.svg'
import star from '../../assets/star.svg'



export const ModalReview = ({reviews}) => {
  return (
    <div className={s.content_modal}>

      <div className={s.review}>
        <div className={s.user}>
          <img className={s.img_user} src={iconUser} alt="" />
          <p className={s.name_user}>{reviews.user}</p>
        </div>

        <div className={s.texts}>
          <p className={s.date}>{reviews.date}</p>
          <p className={s.text}>{reviews.text}</p>

          <p className={s.grade}>Оценка пользователя: <img className={s.star} src={star} alt="" />{reviews.grade}</p>
        </div>
      </div>

    </div>
  )
}
