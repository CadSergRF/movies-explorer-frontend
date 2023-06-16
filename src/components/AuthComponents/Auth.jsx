import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import logo from '../../images/logo.svg';

const Auth = ({ title, btnText, question, link, linkText, children }) => {
  return (
    <section className="auth__container">
      <Link to="/" className="auth__logo">
        <img src={logo} alt="логотип" />
      </Link>
      <h3 className="auth__title">{title}</h3>
      <form className="auth-form">
        {children}
        <button type="submit" className="auth-form__btn">
          {btnText}
        </button>
      </form>
      <p className="auth-form__text">
        {question}
        <Link to={link} className="auth-form__text auth-form__text_link">
          {linkText}
        </Link>
      </p>
    </section>
  )
}

export default Auth
