import React from 'react'
import s from './index.module.scss'
import iconTrophy from '../../assets/Trophy.svg'
import imgAutomat from '../../assets/gates of olimpus.png'
import star from '../../assets/bigStar.svg'
import { Container } from '@mui/material'
import { GetContext } from '../context/Context'


export const ModalAutomat = () => {

    const { modalOpen, setModalOpen } = GetContext()

    return (
        <Container fixed>
            <div className={modalOpen ? [s.ModalAutomat, s.modalShow].join(' ') : s.ModalAutomat}>
                <div className={s.left_side}>
                    <p className={s.estimate_text}><img className={s.iconTrophy} src={iconTrophy} alt="" />2 место в рейтинге</p>
                    <img className={s.imgAutomat} src={imgAutomat} alt="" />
                    <p className={s.text}>В качестве темы оформления аппарата провайдер Betsoft выбрал Азию. Этот акцент прослеживается и в интерфейсе, и в используемых символах. Игровое поле размещено на фоне жилого квартала с небольшими стилизованными домиками. По бокам от него висят многоярусные китайские фонари, связки перца и чеснока. Антураж дополняет плавная азиатская музыка, которая реагирует на совершаемые игроком действия и изменения на поле.
                        <br />
                        <br />
                        При активных вращениях звуковое сопровождение становится более динамичным. Оно затихает, если некоторое время бездействовать.
                        <br />
                        <br />
                        Игровое поле включает 5 рядов и 4 барабана, на которых действуют 20 оплачиваемых линий. Их количество фиксированное — менять его, как в классических слотах, нельзя. Выигрышные комбинации формируются в одном направлении — слева направо, то есть с первого барабана. Теоретический процент возврата (RTP) составляет 96,2%, волатильность слота высокая. Результаты вращений могут быть нестабильными и сильно различаться от одной сессии к другой. Но это компенсируется достаточно крупной максимальной выплатой — выиграть можно до х4000 ставок.</p>

                    <button className={s.button} onClick={()=>setModalOpen(false)}>ПЕРЕЙТИ К ИГРЕ</button>
                </div>

                <div className={s.right_side}>
                    <div className={s.all_grade}>
                        <p className={s.estimate}> <img src={star} alt="" className={s.star} /> 4.8</p>
                        <p className={s.text_grade}>Оценка пользователей</p>
                    </div>

                    <div className={s.texts}>
                        <div className={s.one_side}>
                            <p className={s.textOneside}>Дата выхода</p>
                            <p className={s.textOneside}>Жанр</p>
                            <p className={s.textOneside}>Минимальная ставка</p>
                            <p className={s.textOneside}>Максимальная ставка</p>
                            <p className={s.textOneside}>Максимальная выплата</p>
                            <p className={s.textOneside}>Количество барабанов</p>
                            <p className={s.textOneside}>Количество рядов</p>
                            <p className={s.textOneside}>Количество линий</p>
                            <p className={s.textOneside}>RTP (%)</p>
                            <p className={s.textOneside}>Волатильность</p>
                            <p className={s.textOneside}>Платформы</p>
                        </div>

                        <div className={s.one_side}>
                            <p className={s.textOtherside}>2021</p>
                            <p className={s.textOtherside}>алмазы</p>
                            <p className={s.textOtherside}>0.2</p>
                            <p className={s.textOtherside}>100</p>
                            <p className={s.textOtherside}>625000</p>
                            <p className={s.textOtherside}>6</p>
                            <p className={s.textOtherside}>5</p>
                            <p className={s.textOtherside}>0</p>
                            <p className={s.textOtherside}>96.5</p>
                            <p className={s.textOtherside}>высокая</p>
                            <p className={s.textOtherside}>ПК, смартфон</p>
                        </div>
                    </div>
                </div>
            </div>

        </Container>

    )
}
