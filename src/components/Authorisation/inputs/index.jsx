import React from 'react'
import s from './index.module.scss'
import lockPicture from '../../../assets/lock.svg'
import humanPicture from '../../../assets/human.svg'

export const Inputs = () => {
    return (
        <div className={s.inputs}>
            <div className={s.inputContent}>
                <img className={s.iconInput} src={humanPicture} alt="" />
                <input className={s.input} type="text" placeholder='Почта или номер телефона' />
            </div>

            <div className={s.inputContent}>
                <img className={s.iconInput} src={lockPicture} alt="" />
                <input className={s.input} type="password" placeholder='Пароль'  />
            </div>
        </div>
    )
}
