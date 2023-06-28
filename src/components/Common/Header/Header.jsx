import './Header.css';

import React from 'react';
import logo from '../../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import AuthHeader from '../../AuthComponents/AuthHeader/AuthHeader';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, onBurgerOpen }) => {

  return (
    <header className="header">
      <Link to="/" className="logo" >
        <img src={logo} alt="Логотип" />
      </Link>
      <nav className="header__auth">
        {!isLoggedIn ? (
          <AuthHeader />
        ) : (
          <Navigation
            onBurgerOpen={onBurgerOpen}
          />
        )
        }


      </nav>
    </header>
  )
}

export default Header
