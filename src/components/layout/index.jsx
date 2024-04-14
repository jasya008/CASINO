import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Footer } from '../footer';
import { GetContext } from '../context/Context';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '../SearchBar';
import BurgerMenu from '../burgerMenu';

export const Layouts = () => {
  const { setLoginModal, modalLoginOpen, user, setUser, setLang } =
    GetContext();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user.email');
    if (storedUser) {
      setUser({ email: storedUser });
    }
  }, []); // Run this effect only once on component mount

  const handleLogin = () => {
    // Simulating a successful login, replace this with your actual login logic
    const loggedInUser = { email: 'example@example.com' };
    setUser(loggedInUser);
    localStorage.setItem('user.email', loggedInUser.email);
  };

  const handleLogout = () => {
    setUser('');
    localStorage.removeItem('user.email');
    navigate('/');
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const ChangeLang = (e) => {
    if (e.target.textContent.toLowerCase() === 'eng/') {
      changeLanguage('en');
      setLang(e.target.name);
    } else {
      changeLanguage('port');
      setLang(e.target.name);
    }
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
                  onClick={ChangeLang}
                  name='english'
                >
                  ENG/
                </button>
                <button
                  className='languageButton'
                  onClick={ChangeLang}
                  name='brazilian'
                >
                  PORT
                </button>
                <BurgerMenu />
                <NavLink className='a' to='/GameAutomats'>
                  {t('page_name')}
                </NavLink>
                {user.email ? (
                  <>
                    <button className='navbar_button' onClick={handleLogout}>
                      Exit
                    </button>
                    {/* Add any other logged-in content here */}
                  </>
                ) : (
                  <button
                    className='navbar_button'
                    onClick={() => {
                      setLoginModal(true);
                      handleLogin
                    }}
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
