import React from 'react';
import '../Auth.css';
import Auth from '../Auth';

const Register = ({ onSubmit }) => {
  return (
    <Auth
      title="Добро пожаловать!"
      btnText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      link="/signin"
      linkText="Войти"
      onSubmit={onSubmit}
    >
      <label className="auth__field">
        Имя
        <input
          name="name"
          className="auth__input"
          id="name-input"
          type="text"
          required
        />
        <span className="auth__input-error">
          Что-то пошло не так...
        </span>
      </label>
      <label className="auth__field">
        E-mail
        <input
          name="email"
          className="auth__input"
          id="email-input"
          type="email"
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

export default Register
