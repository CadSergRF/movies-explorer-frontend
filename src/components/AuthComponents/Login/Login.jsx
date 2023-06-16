import React from 'react';
import '../Auth.css';
import Auth from '../Auth';

const Login = () => {
  return (
    <Auth
      title="Рады видеть!"
      btnText="Войти"
      question="Ещё не зарегистрированы?"
      link="/signup"
      linkText="Регистрация"
    >
      <label className="auth__field">
        E-mail
        <input
          name="email"
          className="auth__input"
          id="email-input"
          type="text"
          required
        />
        <span className="auth__input-error">
          Что-то пошло не так...
        </span>
      </label>
      <label className="auth__field">
        Пароль
        <input
          name="password"
          className="auth__input"
          id="password-input"
          type="password"
        />
        <span className="auth__input-error auth__input-error_active">
          Что-то пошло не так...
        </span>
      </label>
    </Auth>
  )
}

export default Login
