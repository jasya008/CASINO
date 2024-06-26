import React, { useRef, useState } from 'react';
import s from './index.module.scss';
import { GetContext } from '../../context/Context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';

export const ModalNumberVerifyRegistr = () => {
  const {
    modalNumberVerifyRegist,
    setModalNumberVerifyRegistr,
    setLoginModal,
  } = GetContext();
  const URL_API = 'http://127.0.0.1:8000/verify-code/';
  // const [verificationStatus, setVerificationStatus] = useState(null);

  const [codeVerify, setCodeVerify] = useState('');
  const [codeVerify2, setCodeVerify2] = useState('');
  const [codeVerify3, setCodeVerify3] = useState('');
  const [codeVerify4, setCodeVerify4] = useState('');
  const [codeVerify5, setCodeVerify5] = useState('');
  const [codeVerify6, setCodeVerify6] = useState('');

  const { t } = useTranslation();

  let res = `${codeVerify}${codeVerify2}${codeVerify3}${codeVerify4}${codeVerify5}${codeVerify6}`;
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const focusNextInput = (index) => {
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const resetVerificationCodes = () => {
    setCodeVerify('');
    setCodeVerify2('');
    setCodeVerify3('');
    setCodeVerify4('');
    setCodeVerify5('');
    setCodeVerify6('');
  };

  const NumberVerify = async () => {
    try {
      const response = await axios.post(URL_API, {
        email: localStorage.getItem('user.email'),
        verification_code: res,
      });

      if (response.data.success) {
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
        resetVerificationCodes()
      } else {
        toast.error(response.data.message || 'Verification failed', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        resetVerificationCodes()
      }
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

      resetVerificationCodes()
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
          {/* <CloseIcon
            className={s.icon}
            onClick={() => setModalNumberVerifyRegistr(false)}
          /> */}
          <h1 className={s.title}>{t('get_code')}</h1>
          <p className={s.text}>{t('text_getCode')}</p>

          <div className={s.inputs}>
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
                setModalNumberVerifyRegistr(false);
                setLoginModal(true);
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
