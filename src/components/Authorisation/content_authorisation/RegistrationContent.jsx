import React from 'react';
import s from './index.module.scss';
import { GetContext } from '../../context/Context';
import { object, string } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from 'react-toastify';
import { InputTextfield } from '../UI';
import { Button } from '@mui/material';
// import userImage from '../../../assets/iconUser.svg'
import iconPerson from '../../../assets/human.svg';
import iconLock from '../../../assets/lock.svg';
import { useTranslation } from 'react-i18next';
import AvatarUsers from '../avatarUsers';

export const RegistrationContent = () => {
  const { user, setUser, setLoginModal } = GetContext();
  const { t } = useTranslation();

  const USER_URL = 'http://127.0.0.1:8000/register/';

  const registerSchema = object({
    name: string()
      .nonempty(`${t('validationName')}`)
      .min(2, `${t('validationMin')}`)
      .max(32, `${t('validationMax')}`),
    email: string()
      .nonempty(`${t('validationEmail')}`)
      .email(''),
    password: string()
      .nonempty(`${t('validationPassword')}`)
      .min(2, `${t('validationMin')}`)
      .max(32, `${t('validationMax')}`),
    age: string()
      .nonempty(`${t('validationAge')}`)
      .min(2, `${t('validationMin')}`)
      .max(2, `${t('validationMax')}`),
  });
  const methods = useForm({
    resolver: zodResolver(registerSchema),
  });

  console.log();

  const { handleSubmit, reset, setValue, getValues } = methods;

  const onRegisterSubmit = async (newUser) => {
    try {
      const { passwordConfirm, ...rest } = newUser;
      const { data } = await axios.post(USER_URL, {
        email: getValues('email'),
        password: getValues('password'),
        number_of_avatar: Number(getValues('avatar')),
        username: getValues('name'),
        age: Number(getValues('age')),
      });

      setUser({
        ...data,
      });

      localStorage.setItem(
        'user.id',
        data.id
      );
      localStorage.setItem(
        'user.email',
        data.email
      );
      localStorage.setItem(
        'user.avatar',
        data.number_of_avatar
      );
      localStorage.setItem(
        'user.name',
        data.username
      );

      setLoginModal(false);

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

      reset();
    } catch (error) {
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

      setLoginModal(true);
    }
  };


  return (
    <FormProvider {...methods}>
      <form className={s.auth_form}>
        <div className={s.first_side}>
          <div className={s.imageInput}>
            <img src={iconPerson} alt='' className={s.icon} />
            <InputTextfield
              className={s.input}
              name='email'
              placeholder='email@email.ru'
              size='small'
              margin='dense'
            />
          </div>

          <div className={s.imageInput}>
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
        </div>

        <div className={s.other_side}>
          <div className={s.textInput}>
            <p className={s.text}>{t('Createname')}</p>
            <InputTextfield
              className={s.inputName}
              name='name'
              placeholder='anatoly123'
              size='small'
              margin='dense'
              type='text'
            />
          </div>

          <div className={s.textInput}>
            <p className={s.text}>{t('age')}</p>
            <InputTextfield
              className={s.inputAge}
              name='age'
              placeholder='26'
              size='small'
              margin='dense'
              type='number'
            />
          </div>

          <p className={s.text}>{t('chooseAvatar')}</p>

          <AvatarUsers setState={setValue} />

          <Button
            onClick={handleSubmit(onRegisterSubmit)}
            className={s.btn}
            variant='contained'
            type='submit'
            sx={{ marginBottom: 1 }}
          >
            {t('createUser')}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
