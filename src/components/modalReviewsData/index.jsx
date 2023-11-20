import React, { useEffect, useState } from 'react'
import { ModalReview } from '../modalReviews'
import axios from 'axios'
import { GetContext } from '../context/Context'
import s from '../modalReviews/index.module.scss'
import iconSort from '../../assets/sort.svg'
import { useTranslation } from 'react-i18next'
import CloseIcon from '@mui/icons-material/Close';


export const ReviewsData = () => {
    const [reviews, setReviews] = useState([])
    const { modalReview, setModalReview } = GetContext()
    const { t } = useTranslation()


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

        < div className={modalReview ? [s.ModalReview, s.modalShow].join(' ') : s.ModalReview} >

            <div className={s.buttons}>
                <div className={s.sort_buttons}>
                <p className={s.sort}><img className={s.img_sort} src={iconSort} alt="" />{t("sort")}:</p>
                <button className={s.button}>{t("positive")}</button>
                <button className={s.button}>{t("negative")}</button>
                </div>
            <CloseIcon className='icon' onClick={() => setModalReview(false)}/>
            </div>
            <div className={s.all_reviews}>
                {reviews.map((reviews) => (
                    <ModalReview key={reviews.id} reviews={reviews} />
                ))}
            </div>
            <div className={s.input_button}>
                <input type="text" className={s.addInput} placeholder={t("review_add")} />
                <button className={s.add_button}>{t("send")}</button>
            </div>
        </div>


    )
}





