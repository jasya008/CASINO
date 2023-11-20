import React from 'react'
import person from '../../assets/person.svg'
import warning from "../../assets/!.svg"
import s from './index.module.scss'
import { useTranslation } from 'react-i18next'

export const InfoTopAutomatGames = ({ data }) => {
  const { t } = useTranslation()

  return (
    <div className={s.TopAutomatGames}>
      <img className={s.img} src={data.img} alt="" />
      <div className={s.all_texts}>
        <p className={s.text}> <img src={warning} alt="" />{t("information")}</p>
        <p className={s.text}> <img src={person} alt="" /> {t("Reviews")}</p>
      </div>
    </div>
  )
}
