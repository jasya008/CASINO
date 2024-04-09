import React, { useState } from 'react';
import s from './index.module.scss';
import { GetContext } from '../../context/Context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export const ModalNumberVerifyRegistr = () => {
  const {
    modalNumberVerifyRegist,
    setModalNumberVerifyRegistr,
    setLoginModal,
  } = GetContext();
  const URL_API = 'http://127.0.0.1:8000/verify-code/';

  const [codeVerify, setCodeVerify] = useState('');
  const [codeVerify2, setCodeVerify2] = useState('');
  const [codeVerify3, setCodeVerify3] = useState('');
  const [codeVerify4, setCodeVerify4] = useState('');
  const [codeVerify5, setCodeVerify5] = useState('');
  const [codeVerify6, setCodeVerify6] = useState('');

  const { t } = useTranslation();

  let res = `${codeVerify}${codeVerify2}${codeVerify3}${codeVerify4}${codeVerify5}${codeVerify6}`;

  const NumberVerify = async () => {
    try {
      await axios.post(URL_API, {
        email: localStorage.getItem('user.email'),
        verification_code: res,
      });

      

      toast.success(`${t('registered')}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      setModalNumberVerifyRegistr(false); 
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      setModalNumberVerifyRegistr(true);
    }
  };
  return (
    <div
      className={
        modalNumberVerifyRegist
          ? [s.ModalNumberVerify, s.modalShow].join('')
          : s.ModalNumberVerify
      }
    >
      <div className='body'>
        <div className={s.content}>
          <h1 className={s.title}>{t('get_code')}</h1>
          <p className={s.text}>{t('text_getCode')}</p>
          <div className={s.inputs}>
            <input
              className={s.input}
              type='text'
              onChange={(e) => setCodeVerify(e.target.value)}
            />
            <input
              className={s.input}
              type='text'
              onChange={(e) => setCodeVerify2(e.target.value)}
            />
            <input
              className={s.input}
              type='text'
              onChange={(e) => setCodeVerify3(e.target.value)}
            />
            <input
              className={s.input}
              type='text'
              onChange={(e) => setCodeVerify4(e.target.value)}
            />
            <input
              className={s.input}
              type='text'
              onChange={(e) => setCodeVerify5(e.target.value)}
            />
            <input
              className={s.input}
              type='text'
              onChange={(e) => setCodeVerify6(e.target.value)}
            />
          </div>

          <p className={s.text}>
            {t('text_recieveCode')}
            <span
              onClick={() => {
                setModalNumberVerifyRegistr(false);
              }}
            >
              {t('resend')}
            </span>
          </p>
          <button onClick={() => NumberVerify()} className={s.btn}>
            {t('verify_btn')}
          </button>
        </div>
      </div>
    </div>
  );
};
