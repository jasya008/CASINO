import React, { useState } from 'react'
import s from './index.module.scss'
import { Container } from '@mui/material'
import Image from '../../assets/drip.png'
import Trophy from '../../assets/Trophy.svg'
import Star from '../../assets/bigStar.svg'
import iconKing from '../../assets/kingIcon.svg'
import handIcon from '../../assets/Hand-OneFinger.svg'
import fileIcon from '../../assets/File.svg'
import { PicturesPay } from './picturesPay'
import russianFlag from '../../assets/russianFlag.png'
import CircularDeterminate from './progressCirculars'
import { GetContext } from '../context/Context'
import { useTranslation } from 'react-i18next'



export const ModalDataCasino = () => {

    const { modalOpen, setModalOpen } = GetContext()
    const { t } = useTranslation()

    return (
        <Container fixed >
            <div className={modalOpen ? [s.modal, s.modalShow].join(' ') : s.modal} >
                <div className={s.left_side}>
                    <div className={s.circulars}>
                        <img className={s.img} src={Image} alt="" />
                        <div className={s.textsCircular}>
                            <CircularDeterminate variant="determinate" value={100} />
                            <p className={s.textCircular}>{t("Reliability")}</p>
                        </div>

                        <div className={s.textsCircular}>
                            <CircularDeterminate variant="determinate" value={100} />
                            <p className={s.textCircular}>{t("Speed")}</p>
                        </div>

                        <div className={s.textsCircular}>
                            <CircularDeterminate variant="determinate" value={90.6} />
                            <p className={s.textCircular}>{t("Funds")}</p>
                        </div>

                        <div className={s.textsCircular}>
                            <CircularDeterminate variant="determinate" value={90.7} />
                            <p className={s.textCircular}>{t("grade")}</p>
                        </div>
                    </div>


                    <div className={s.texts}>
                        <img className={s.icon} src={Trophy} alt="" />
                        <p className={s.text_img}>{t("rank")}</p>
                    </div>
                    <p className={s.text}>
                       {t("description_infoCasino")}
                    </p>
                    <button className={s.button} onClick={() => setModalOpen(false)}>{t("play_button")}</button>

                </div>

                <div className={s.right_side}>
                    <div className={s.all_text}>
                        <h2 className={s.grade}> <img className={s.star} src={Star} alt="" /> 4.8</h2>
                        <div className={s.textGrade}>{t("editGrade")}</div>
                    </div>

                    <div className={s.advertising}>
                        <img className={s.iconKing} src={iconKing} alt="" />
                        <p className={s.text}>{t("discount")} <br />+ <br /> <span>{t("bonus")}</span> </p>
                        <div className={s.all}>
                            <p className={s.small_text}>{t("discount_text")}</p>
                            <img src={handIcon} alt="" />
                            <button className={s.button_uare}> {t("UARESUPER")} <img src={fileIcon} alt="" /></button>
                        </div>
                    </div>

                    <div className={s.all_pays}>
                        <div className={s.all_things}>
                            <p className={s.text_pay}> {t("Payments")}</p>
                            <PicturesPay />
                        </div>

                        <hr />

                        <div className={s.all_things}>
                            <p className={s.text_pay}> {t("Providers")}</p>
                            <PicturesPay />
                        </div>

                        <hr />

                        <div className={s.all_things}>
                            <p className={s.text_pay}> {t("Interface")}</p>
                            <PicturesPay />
                        </div>

                        <p className={s.text_production}> {t("Available")}<img src={russianFlag} alt="" /></p>
                    </div>
                </div>


            </div>



        </Container>

    )
}
