import './Header.css';

import React from 'react';
import logo from '../../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

const Header = ({ isLoggedIn }) => {

  return (
    <header className="header">
      <a href="/" className="logo" >
        <img src={logo} alt="Логотип" />
      </a>
      <nav className="header__auth">
        {!isLoggedIn ? (
          <>
            <a href="/signup" className="header__link header__text">Регистрация</a>
            <button className="header__btn header__text">Войти</button>
          </>
        ) : (
          <Navigation />
        )
        }


      </nav>
    </header>
  )
}

export default Header
