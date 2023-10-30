import React from 'react'
import s from './index.module.scss'
import { Inputs } from '../inputs'
import { GetContext } from '../../context/Context'

export const LoginContent = () => {
    const { setLoginModal } = GetContext()
    return (
        <div className={s.content_login}>
            <Inputs />
            <div className={s.all_buttons}>
                <p className={s.text}>Забыли пароль?</p>
                <button onClick={() => setLoginModal(false)} className={s.button_login}>Войти</button>
            </div>
        </div>
    )
}
