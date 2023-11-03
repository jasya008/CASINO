import React from 'react'
import s from './index.module.scss'
import person from '../../assets/person.svg'
import warning from "../../assets/!.svg"
import { GetContext } from '../context/Context'

export const InfoAutomats = ({ data }) => {
    const { setModalOpen } = GetContext()
    const { setModalReview } = GetContext()

    return (
        <div className={s.cardAutomat} >
            <img className={s.img} src={data.img} alt="" />
            <div className={s.all_texts}>
                <p onClick={() => setModalOpen(true)} className={s.text}> <img src={warning} alt="" />Информация</p>
                <p onClick={() => setModalReview(true)} className={s.text}> <img src={person} alt="" /> Отзывы</p>
            </div>
        </div>
    )
}
