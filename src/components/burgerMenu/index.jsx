import React from 'react';
import s from './index.module.scss';
import MenuIcon from '@mui/icons-material/Menu';

const BurgerMenu = () => {
  return (
    <div className={s.burgerMenu}>
      <MenuIcon />
    </div>
  );
};

export default BurgerMenu;
