import { Container } from '@mui/material'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Footer } from '../footer';
import searchIcon from "../../assets/SearchOutlined.svg"
import { GetContext } from '../context/Context';



export const Layouts = () => {
    const { setLoginModal, modalLoginOpen } = GetContext()
    const test = ()=> {
        console.log(modalLoginOpen);
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
                                <input className='searchbar' type="text" placeholder='Поиск по сайту' />
                                <img src={searchIcon} className='icon' alt="" />

                            </div>

                            <div className="links">
                                <NavLink to="/GameAutomats" >Игровые автоматы</NavLink>
                                <button className='navbar_button' onClick={()=> setLoginModal(!modalLoginOpen)}>Войти</button>
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
    )
}
