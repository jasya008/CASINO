import React from 'react'
import s from './index.module.scss'
import { Container } from '@mui/material'

export const ButtonsAutomat = () => {
    return (
        <Container fixed>
            <div className={s.buttons}>
                <button className={s.button}>Все</button>
                <button className={s.button}>Лучшие</button>
                <button className={s.button}>Новые</button>
                <button className={s.button}>Криптовалюты</button>
                <button className={s.button}>Валюты</button>
                <button className={s.button}>Вулканы</button>
                <button className={s.button}>Страны</button>
            </div>
        </Container>

    )
}
