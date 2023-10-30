import React from 'react'
import s from './index.module.scss'
import person from '../../assets/person.svg'
import warning from "../../assets/!.svg"
import { GetContext } from '../context/Context'

export const InfoAutomats = ({ data }) => {
    const { setModalOpen } = GetContext()
    return (
        <div className={s.cardAutomat} onClick={() => setModalOpen(true)}>
            <img className={s.img} src={data.img} alt="" />
            <div className={s.all_texts}>
                <p className={s.text}> <img src={warning} alt="" />Информация</p>
                <p className={s.text}> <img src={person} alt="" /> Отзывы</p>
            </div>
        </div>
    )
}
