import React from 'react'
import s from './index.module.scss'
import { GetContext } from '../context/Context'
import BasicTabs from './tabs'


export const ModalRegistration = () => {
  const { modalLoginOpen } = GetContext()

  return (
    <div className={s.all_body}>
    <div className={modalLoginOpen ? [s.loginModalnone, s.loginModal].join(' ') : s.loginModalnone}>
      <BasicTabs />
    </div>
    </div>
  )
}
