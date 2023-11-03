import React, { useEffect, useState } from 'react'
import { ModalReview } from '../modalReviews'
import axios from 'axios'
import { GetContext } from '../context/Context'
import s from '../modalReviews/index.module.scss'
import iconSort from '../../assets/sort.svg'


export const ReviewsData = () => {
    const [reviews, setReviews] = useState([])
    const { modalReview, setModalReview } = GetContext()


    const API_URL = "http://localhost:4080/Reviews"


    const getData = async () => {
        try {
            const { data } = await axios(API_URL)
            setReviews(data)

        } catch (error) {
            console.log(error.message);
        }

    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className={modalReview ? [s.ModalReview, s.modalShow].join(' ') : s.ModalReview}>
            <div className={s.buttons}>
                <p className={s.sort}><img className={s.img_sort} src={iconSort} alt="" />Сортировать:</p>
                <button className={s.button}>Положительные</button>
                <button className={s.button}>Отрицательные</button>
            </div>
            <div className={s.all_reviews}>
            {reviews.map((reviews) => (
                <ModalReview key={reviews.id} reviews={reviews} />
            ))}
            </div>
            <button className={s.close} onClick={() => setModalReview(false)}>Close</button>
        </div>
    )
}





