import React, { useState } from 'react';
import s from './index.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';

const BurgerMenu = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const { setLoginModal, user, modalLoginOpen } = GetContext();
  const { t } = useTranslation();

  const handleLogout = () => {
    setUser({
      email: '',
    });
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className={s.burgerMenu}>
      <MenuIcon
        className={s.icon}
        onClick={() => setOpenBurger((prev) => !prev)}
      />
      <div
        className={openBurger ? [s.navMobile, s.menu].join(' ') : s.navMobile}
      >
        <Link className={s.link} to='/GameAutomats'>
          {t('page_name')}
        </Link>
        {user ? (
          <button className={s.navbar_button} onClick={handleLogout}>
            Exit
          </button>
        ) : (
          <button
            className={s.navbar_button}
            onClick={() => setLoginModal(!modalLoginOpen)}
          >
            {t('login')}
          </button>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
