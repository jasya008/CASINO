import React, { useState } from 'react';
import { GetContext } from '../../context/Context';
import s from './index.module.scss';
import { useSpring, animated } from 'react-spring';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputTextfield } from '../../Authorisation/UI';
import iconPerson from '../../../assets/human.svg';
import { FormProvider, useForm } from 'react-hook-form';
import { object, string } from 'zod';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';

export const ModalEmail = () => {
  const {
    modalEmailVerify,
    setModalEmailVerify,
    setLoginModal,
    setModalNumberVerify,
  } = GetContext();

  const [email, setEmail] = useState([]);

  const URL_API = 'http://127.0.0.1:8000/send-verification-code/';

  const { t } = useTranslation();

  const animation = useSpring({
    opacity: modalEmailVerify ? 1 : 0,
    transform: modalEmailVerify ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const EmailVerify = object({
    email: string()
      .nonempty(`${t('validationEmail')}`)
      .email(),
  });

  const methods = useForm({
    resolver: zodResolver(EmailVerify),
  });

  // const { handleSubmit, reset } = methods;

  const SendVerifycode = async () => {
    try {
      await axios.post(URL_API, {
        email: email,
      });

      localStorage.setItem('user.EmailVerify', email);


      toast.success(`${t('send_code')}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      setModalEmailVerify(false);
      setModalNumberVerify(true);
    } catch (error) {
      console.log(error.message);

      toast.error(error.response.data, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      setModalEmailVerify(true);
    }
  };

  return (
    // <animated.div style={animation} className='popup'>
    <div
      className={
        modalEmailVerify
          ? [s.ModalEmailVerify, s.modalShow].join('')
          : s.ModalEmailVerify
      }
    >
      <div className='body'>
        {/* <FormProvider {...methods}> */}
        <form className={s.block}>
          <h1 className={s.title}>{t('recover_password')}</h1>
          <p className={s.text}>{t('email_text_def')}</p>
          <div className={s.imgInput}>
            <img src={iconPerson} alt='' className={s.icon} />

            <input
              type='text'
              className={s.input}
              placeholder={t('input_login')}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type='button'
            onClick={() => SendVerifycode()}
            className={s.btn}
          >
            {t('reset_password')}
          </button>
          <p
            className={s.back_text}
            onClick={() => {
              setModalEmailVerify(false);
              setLoginModal(true);
            }}
          >
            {t('back_sign')}
          </p>
        </form>
        {/* </FormProvider> */}
      </div>
    </div>
    // </animated.div>
  );
};
