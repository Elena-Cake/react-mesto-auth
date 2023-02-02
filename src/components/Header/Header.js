import logoPath from '../../images/header_logo.svg';

import { Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';


function Header({ emailUser, signOut, showUser, openMenu, hideMenu }) {


    return (
        <header className="header">
            <div className='header__menu'>
                <img className="header__logo" src={logoPath} alt="логотип 'Место'" />
                {!showUser ?
                    <button className='navbar__burger' onClick={openMenu}>
                        <div className='navbar__line'></div>
                        <div className='navbar__line'></div>
                        <div className='navbar__line'></div>
                    </button>
                    :
                    <button className='navbar__close-btn' onClick={hideMenu}>&#x2715;</button>
                }
            </div>
            <div className='header__navbar navbar'>
                <Routes>
                    <Route path="/sign-up" element={
                        <Link to={"/sign-in"} className="navbar__text navbar__text_type_link navbar__login-page">Войти</Link>} />
                    <Route path="/sign-in" element={
                        <Link to={"/sign-up"} className="navbar__text navbar__text_type_link navbar__login-page">Регистрация</Link>} />
                    <Route path="/" element={
                        <div className={`navbar__main ${showUser ? 'navbar__main_open' : ''}`}>
                            <p className='navbar__text'>{emailUser}</p>
                            <button className='navbar__text navbar__text_type_link' onClick={signOut}>Выйти</button>
                        </div>} />
                </Routes>
            </div>
        </header >
    )
}

export default Header;