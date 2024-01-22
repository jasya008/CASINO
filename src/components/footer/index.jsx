import React from 'react';
import s from './index.module.scss';
import { Container } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';

export const Footer = () => {
  return (
    <Container fixed>
      <footer className={s.footer}>
        <h3 className={s.logo}>CASINO</h3>
        <p className={s.text}>
          Сайт использует IP адреса, сookie и данные геолокации пользователей
          сайта
        </p>

        <a href='https://t.me/SUPER_CASINO_CHANEL'>
          <TelegramIcon className={s.icon} />
        </a>
      </footer>
    </Container>
  );
};
