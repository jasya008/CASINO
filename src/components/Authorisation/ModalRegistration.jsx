import React from 'react';
import s from './index.module.scss';
import { GetContext } from '../context/Context';
import BasicTabs from './tabs';
import CloseIcon from '@mui/icons-material/Close';

export const ModalRegistration = () => {
  const { modalLoginOpen, setLoginModal } = GetContext();

  return (
    <>
    <div
      className={
        modalLoginOpen
          ? [s.loginModalnone, s.loginModal].join(' ')
          : s.loginModalnone
      }
    >
      <div className='body'>
        <div className={s.modal}>
          <CloseIcon className={s.icon} onClick={() => setLoginModal(false)} />
          <BasicTabs />
        </div>

      </div>
    </div>


    </>
  );
};
//
