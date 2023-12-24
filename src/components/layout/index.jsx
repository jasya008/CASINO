import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Footer } from '../footer';
import { GetContext } from '../context/Context';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '../SearchBar';

export const Layouts = () => {
  const { setLoginModal, modalLoginOpen, user, setUser } = GetContext();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({
      email: '',
    });
    localStorage.removeItem('user');
    navigate('/');
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <header>
        <nav>
          <Container fixed>
            <div className='navbar'>
              <Link to='/'>
                <h3 className='logo'>CASINO</h3>
              </Link>

              <SearchBar />

              <div className='links'>
                <button
                  className='languageButton'
                  onClick={() => changeLanguage('en')}
                >
                  ENG/
                </button>
                <button
                  className='languageButton'
                  onClick={() => changeLanguage('port')}
                >
                  PORT
                </button>

                <NavLink to='/GameAutomats'>{t('page_name')}</NavLink>

                {user.email ? (
                  <button className='navbar_button' onClick={handleLogout}>
                    Exit
                  </button>
                ) : null}

                {!user.email && (
                  <button
                    className='navbar_button'
                    onClick={() => setLoginModal(!modalLoginOpen)}
                  >
                    {t('login')}
                  </button>
                )}
              </div>
            </div>
          </Container>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
