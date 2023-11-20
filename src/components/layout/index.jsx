import { Container } from '@mui/material'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Footer } from '../footer';
import searchIcon from "../../assets/SearchOutlined.svg"
import { GetContext } from '../context/Context';
import { useTranslation } from 'react-i18next';



export const Layouts = () => {
    const { setLoginModal, modalLoginOpen, user, setUser } = GetContext()

    const handleLogout = () => {
        setUser({
            email: "",
        });
        localStorage.removeItem("user");
    };

    const { t, i18n } = useTranslation()

    const changeLanguage = (language) => {
      i18n.changeLanguage(language)
    }


    return (
        <>
            <header>
                <nav>
                    <Container fixed>
                        <div className="navbar">
                            <Link to="/">
                                <h3 className="logo" >CASINO</h3>
                            </Link>

                            <div className="inputIcon">
                                <input className='searchbar' type="text" placeholder={t("searchbar_placeholder")} />
                                <img src={searchIcon} className='icon' alt="" />

                            </div>

                            <div className="links">
                                <button className="languageButton" onClick={()=>changeLanguage("en")}>ENG/</button>
                                <button className="languageButton" onClick={()=>changeLanguage("port")}>PORT</button>
                    
                                <NavLink to="/GameAutomats" >{t("page_name")}</NavLink>
                                {user.email.lenght ? (
                                    <button className='navbar_button' onClick={handleLogout}>Exit</button>
                                ) :
                                    <button className='navbar_button' onClick={() => setLoginModal(!modalLoginOpen)}>{t("login")}</button>
                                }

                            </div>

                        </div>
                        
                    </Container>
                </nav>
                
            </header >


            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}
