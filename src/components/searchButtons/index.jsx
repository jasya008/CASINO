import React from 'react'
import s from './index.module.scss'
import { useTranslation } from 'react-i18next'

export const SearchButtons = () => {
    const { t } = useTranslation()
    return (
        <div className={s.searchButtons}>
            <button className={s.button}>{t("All_button")}</button>
            <button className={s.button}>{t("bests_button")}</button>
            <button className={s.button}>{t("new_button")}</button>
            <button className={s.button}>{t("Cryptocurrencies_button")}</button>
            <button className={s.button}>{t("Currencies_button")}</button>
            <button className={s.button}>{t("Platforms_button")}</button>
            <button className={s.button}>{t("Volcanoes_button")}</button>
            <button className={s.button}>{t("Countries_button")}</button>
            <button className={s.button}>{t("Peculiarities_button")}</button>
            <button className={s.button}>{t("Blacklist_button")}</button>
        </div>
    )
}
