import React from 'react';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <>
      <Link to="/signup" className="header__link header__text">Регистрация</Link>
      <Link to="/signin" className="header__btn header__text">Войти</Link>
    </>
  )
}

export default AuthHeader
