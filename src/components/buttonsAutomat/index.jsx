import React from 'react'
import s from './index.module.scss'
import { Container } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const ButtonsAutomat = () => {
    const { t } = useTranslation()

    return (
        <Container fixed>
            <div className={s.buttons}>
                <button className={s.button}>{t("All_button")}</button>
                <button className={s.button}>{t("bests_button")}</button>
                <button className={s.button}>{t("new_button")}</button>
                <button className={s.button}>{t("Cryptocurrencies_button")}</button>
                <button className={s.button}>{t("Currencies_button")}</button>
                <button className={s.button}>{t("Volcanoes_button")}</button>
                <button className={s.button}>{t("Countries_button")}</button>
            </div>
        </Container>

    )
}
