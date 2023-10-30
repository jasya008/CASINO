import React from 'react'
import s from './index.module.scss'

export const SearchButtons = () => {
    return (
        <div className={s.searchButtons}>
            <button className={s.button}>Все</button>
            <button className={s.button}>Лучшие</button>
            <button className={s.button}>Новые</button>
            <button className={s.button}>Криптовалюты</button>
            <button className={s.button}>Валюты</button>
            <button className={s.button}>Платформы</button>
            <button className={s.button}>Вулканы</button>
            <button className={s.button}>Страны</button>
            <button className={s.button}>Особенности</button>
            <button className={s.button}>Черный список</button>
        </div>
    )
}
