import React, { useState, useRef } from 'react'; // Импортируем useRef
import s from './index.module.scss';
import { GetContext } from '../../context/Context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export const ModalNumberVerify = () => {
  const {
    modalNumberVerify,
    setModalNumberVerify,
    setModalEmailVerify,
    setModalChangePassword,
  } = GetContext();
  const URL_API = 'http://127.0.0.1:8000/verify-code/';

  // Используем useRef для получения ссылок на инпуты
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [codeVerify, setCodeVerify] = useState('');
  const [codeVerify2, setCodeVerify2] = useState('');
  const [codeVerify3, setCodeVerify3] = useState('');
  const [codeVerify4, setCodeVerify4] = useState('');
  const [codeVerify5, setCodeVerify5] = useState('');
  const [codeVerify6, setCodeVerify6] = useState('');

  const { t } = useTranslation();

  let res = `${codeVerify}${codeVerify2}${codeVerify3}${codeVerify4}${codeVerify5}${codeVerify6}`;


  const focusNextInput = (index) => {
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const NumberVerify = async () => {
    try {
      await axios.post(URL_API, {
        email: localStorage.getItem('user.EmailVerify'),
        verification_code: res,
      });

      toast.success(`${t('code_verified')}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      setModalNumberVerify(false);
      setModalChangePassword(true);
    } catch (error) {
      toast.error(error.preview, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      setModalNumberVerify(true);
    }
  };
  return (
    <div
      className={
        modalNumberVerify
          ? [s.ModalNumberVerify, s.modalShow].join('')
          : s.ModalNumberVerify
      }
    >
      <div className='body'>
        <div className={s.content}>
          <h1 className={s.title}>{t('get_code')}</h1>
          <p className={s.text}>{t('text_getCode')}</p>
          <div className={s.inputs}>
            {/* Используем ref для каждого инпута */}
            <input
              ref={inputRefs[0]}
              className={s.input}
              type='text'
              maxLength={1}
              onChange={(e) => {
                setCodeVerify(e.target.value);
                if (e.target.value.length === 1) focusNextInput(0);
              }}
            />
            <input
              ref={inputRefs[1]}
              className={s.input}
              type='text'
              maxLength={1}
              onChange={(e) => {
                setCodeVerify2(e.target.value);
                if (e.target.value.length === 1) focusNextInput(1);
              }}
            />
            <input
              ref={inputRefs[2]}
              className={s.input}
              type='text'
              maxLength={1}
              onChange={(e) => {
                setCodeVerify3(e.target.value);
                if (e.target.value.length === 1) focusNextInput(2);
              }}
            />
            <input
              ref={inputRefs[3]}
              className={s.input}
              type='text'
              maxLength={1}
              onChange={(e) => {
                setCodeVerify4(e.target.value);
                if (e.target.value.length === 1) focusNextInput(3);
              }}
            />
            <input
              ref={inputRefs[4]}
              className={s.input}
              type='text'
              maxLength={1}
              onChange={(e) => {
                setCodeVerify5(e.target.value);
                if (e.target.value.length === 1) focusNextInput(4);
              }}
            />
            <input
              ref={inputRefs[5]}
              className={s.input}
              type='text'
              maxLength={1}
              onChange={(e) => {
                setCodeVerify6(e.target.value);
                if (e.target.value.length === 1) focusNextInput(5);
              }}
            />
          </div>

          <p className={s.text}>
            {t('text_recieveCode')}
            <span
              onClick={() => {
                setModalNumberVerify(false);
                setModalEmailVerify(true);
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
