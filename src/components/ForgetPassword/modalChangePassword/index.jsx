import React, { useState } from 'react';
import { GetContext } from '../../context/Context';
import s from './index.module.scss';
import iconLock from '../../../assets/lock.svg';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

export const ModalChangepassword = () => {
  const { modalChangePassword, setModalChangePassword } = GetContext();
  const [newPassword, setNewPassword] = useState([]);
  const URL_API = 'http://127.0.0.1:8000/change-password/';

  const { t } = useTranslation();

  const NewPassword = async () => {
    try {
      await axios.post(URL_API, {
        email: localStorage.getItem('user.EmailVerify'),
        new_password: newPassword,
      });

      toast.success(`${t("password_change")}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      setModalChangePassword(false);
    } catch (error) {
      console.log(error.message);
      setModalChangePassword(true);
    }
  };

  return (
    <div
      className={
        modalChangePassword
          ? [s.ModalChangePassword, s.modalShow].join('')
          : s.ModalChangePassword
      }
    >
      <div className='body'>
        <div className={s.content}>
          <h1 className={s.title}>{t("recover-password")}</h1>
          <p className={s.text}>
           {t("recover_password-text")}
          </p>
          <div className={s.imgInput}>
            <img src={iconLock} alt='' className={s.icon} />
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={t("new_password")}
              className={s.input}
              type='password'
            />
          </div>
          <div className={s.imgInput}>
            <img src={iconLock} alt='' className={s.icon} />
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder={t("new_password_repeat")}
              className={s.input}
              type='password'
            />
          </div>
          <button className={s.button} onClick={() => NewPassword()}>
           {t("button_recoverPassword")}
          </button>
        </div>
      </div>
    </div>
  );
};
