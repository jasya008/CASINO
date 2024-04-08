import React from 'react';
import s from './index.module.scss';
import { object, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { GetContext } from '../../context/Context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { InputTextfield } from '../UI';
import { Button } from '@mui/material';
import iconPerson from '../../../assets/human.svg';
import iconLock from '../../../assets/lock.svg';
import { useTranslation } from 'react-i18next';
import { ModalEmail } from '../../ForgetPassword/modalEmail';

export const LoginContent = () => {
  const { user, setUser, setLoginModal, setModalEmailVerify } = GetContext();
  const { t } = useTranslation();

  const LOGIN_URL = 'http://127.0.0.1:8000/login/';
  const loginrSchema = object({
    email: string()
      .nonempty(`${t('validationEmail')}`)
      .email(),
    password: string(`${t('validationPassword')}`)
      .nonempty()
      .min(2, `${t('validationMax')}`)
      .max(32, `${t('validationMin')}`),
  });
  const methods = useForm({
    resolver: zodResolver(loginrSchema),
  });

  const { handleSubmit, reset, getValues } = methods;

  const onLoginSubmit = async () => {
    try {
      const { data } = await axios.post(LOGIN_URL,  {
        email: getValues('email'),
        password: getValues('password'),
      });

      setUser({
        ...data,
      });


      toast.success(`${t('logenned')}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      reset();

      setLoginModal(false);
    } catch (error) {
      toast.error(`${t('errorLogin')}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      setLoginModal(true);
    }
  };
  return (
    <>
      <FormProvider {...methods}>
        <form className={s.login_form}>
          <div className={s.imgInput}>
            <img src={iconPerson} alt='' className={s.icon} />
            <InputTextfield
              className={s.input}
              name='email'
              placeholder={t('input_login')}
              size='small'
              margin='dense'
            />
          </div>

          <div className={s.imgInput}>
            <img src={iconLock} alt='' className={s.icon} />
            <InputTextfield
              className={s.input}
              name='password'
              placeholder={t('Password')}
              size='small'
              margin='dense'
              type='password'
            />
          </div>

          <div className={s.buttonText}>
            <p
              onClick={() => {
                setModalEmailVerify(true);
                setLoginModal(false);
              }}
              className={s.text}
            >
              {t('forgetPassword')}
            </p>
            <Button
              onClick={handleSubmit(onLoginSubmit)}
              className={s.btn}
              variant='contained'
              type='submit'
              sx={{ marginBottom: 1 }}
            >
              {t('Login')}
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
