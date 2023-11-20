import React from 'react'
import s from './index.module.scss'
import iconTrophy from '../../assets/Trophy.svg'
import imgAutomat from '../../assets/gates of olimpus.png'
import star from '../../assets/bigStar.svg'
import { Container } from '@mui/material'
import { GetContext } from '../context/Context'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'


export const ModalGames = () => {

    const { modalOpen, setModalOpen } = GetContext()
    const { t } = useTranslation()

    return (
        <Container fixed>
            <div className={modalOpen ? [s.ModalAutomat, s.modalShow].join(' ') : s.ModalAutomat}>
                <div className={s.left_side}>
                    <p className={s.estimate_text}><img className={s.iconTrophy} src={iconTrophy} alt="" />{t("rank")}</p>
                    <img className={s.imgAutomat} src={imgAutomat} alt="" />
                    <p className={s.text}>{t("descriptionGames")}</p>

                    <button className={s.button} onClick={() => setModalOpen(false)}>{t("buttonGame_text")}</button>
                </div>

                <div className={s.right_side}>
                    <div className={s.all_grade}>
                        <p className={s.estimate}> <img src={star} alt="" className={s.star} /> 4.8</p>
                        <p className={s.text_grade}>{t("grade")}</p>
                    </div>

                    <div className={s.texts}>
                        <div className={s.one_side}>
                            <p className={s.textOneside}>{t("Date")}</p>
                            <p className={s.textOneside}>{t("genre")}</p>
                            <p className={s.textOneside}>{t("minBid")}</p>
                            <p className={s.textOneside}>{t("maxBid")}</p>
                            <p className={s.textOneside}>{t("maxpay")}</p>
                            <p className={s.textOneside}>{t("reels")}</p>
                            <p className={s.textOneside}>{t("rows")}</p>
                            <p className={s.textOneside}>{t("lines")}</p>
                            <p className={s.textOneside}>{t("rtp")}</p>
                            <p className={s.textOneside}>{t("Volatility")}</p>
                            <p className={s.textOneside}>{t("Platforms_button")}</p>
                        </div>

                        <div className={s.one_side}>
                            <p className={s.textOtherside}>2021</p>
                            <p className={s.textOtherside}>{t("diamons")}</p>
                            <p className={s.textOtherside}>0.2</p>
                            <p className={s.textOtherside}>100</p>
                            <p className={s.textOtherside}>625000</p>
                            <p className={s.textOtherside}>6</p>
                            <p className={s.textOtherside}>5</p>
                            <p className={s.textOtherside}>0</p>
                            <p className={s.textOtherside}>96.5</p>
                            <p className={s.textOtherside}>{t("high")}</p>
                            <p className={s.textOtherside}>{t("PcSmart")}</p>
                        </div>
                    </div>
                </div>
            </div>

        </Container>

    )
}
