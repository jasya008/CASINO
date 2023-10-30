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



export const ModalDataGames = () => {

    const { modalOpen, setModalOpen } = GetContext()
    
    return (
        <Container fixed >
            <div className={modalOpen ? [s.modal, s.modalShow].join(' ') : s.modal} >
                <div className={s.left_side}>
                    <div className={s.circulars}>
                        <img className={s.img} src={Image} alt="" />
                        <div className={s.textsCircular}>
                            <CircularDeterminate variant="determinate" value={99} />
                            <p className={s.textCircular}>Надежность</p>
                        </div>

                        <div className={s.textsCircular}>
                            <CircularDeterminate variant="determinate" value={100} />
                            <p className={s.textCircular}>Скорость</p>
                        </div>

                        <div className={s.textsCircular}>
                            <CircularDeterminate variant="determinate" value={90.6} />
                            <p className={s.textCircular}>Вывод средств</p>
                        </div>

                        <div className={s.textsCircular}>
                            <CircularDeterminate variant="determinate" value={90.7} />
                            <p className={s.textCircular}>Оценка Игрока</p>
                        </div>
                    </div>


                    <div className={s.texts}>
                        <img className={s.icon} src={Trophy} alt="" />
                        <p className={s.text_img}>2 место в рейтинге</p>
                    </div>
                    <p className={s.text}>Над сайтом работали специалисты, у которых за плечами не один успешный проект в индустрии iGaming. Они создали интерфейс, который удобен в использовании. Визуальное оформление страниц выглядит стильно и современно. Для навигации по сайту на главной странице размещено меню со всеми разделами. С его помощью пользователи быстро перемещаются между страницами. В один клик они могут перейти в раздел с играми, бонусами, турнирами, live-трансляциями или открыть чат службы поддержки.
                        <br />
                        <br />
                        Сайт оформили в темной гамме, как многие другие подобные проекты
                        <br />
                        <br />
                        Разработчики запустили официальный сайт Drip Casino и сделали его доступным для пользователей из многих стран. В правилах компании есть список запрещенных территорий, но он небольшой. Зарегистрироваться может каждый игрок, достигший 18-летия и проживающий в стране, доступ из которой компания не ограничила.
                        <br />
                        <br />
                        Сайт переведен на русский и английский языки. Это сделало его популярным среди игроков не только из России и других стран СНГ, но и дальнего зарубежья.
                    </p>
                    <button className={s.button} onClick={() => setModalOpen(false)}>ИГРАТЬ</button>

                </div>

                <div className={s.right_side}>
                    <div className={s.all_text}>
                        <h2 className={s.grade}> <img className={s.star} src={Star} alt="" /> 4.8</h2>
                        <div className={s.textGrade}>Оценка редакции</div>
                    </div>

                    <div className={s.advertising}>
                        <img className={s.iconKing} src={iconKing} alt="" />
                        <p className={s.text}>100 бесплатных вращений <br />+ <br /> Бонус 150%  </p>
                        <div className={s.all}>
                            <p className={s.small_text}>Забирай скорей</p>
                            <img src={handIcon} alt="" />
                            <button className={s.button_uare}> UARESUPER <img src={fileIcon} alt="" /></button>
                        </div>
                    </div>

                    <div className={s.all_pays}>
                        <div className={s.all_things}>
                            <p className={s.text_pay}>Платежи</p>
                            <PicturesPay />
                        </div>

                        <hr />

                        <div className={s.all_things}>
                            <p className={s.text_pay}>Провайдеры</p>
                            <PicturesPay />
                        </div>

                        <hr />

                        <div className={s.all_things}>
                            <p className={s.text_pay}>Языки интерфейса</p>
                            <PicturesPay />
                        </div>

                        <p className={s.text_production}>Доступно в России <img src={russianFlag} alt="" /></p>
                    </div>
                </div>


            </div>



        </Container>

    )
}
