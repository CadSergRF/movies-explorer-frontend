import React from 'react';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <>
      <Link to="/signup" className="header__link header__text">Регистрация</Link>
      <button className="header__btn header__text">Войти</button>
    </>
  )
}

export default AuthHeader
