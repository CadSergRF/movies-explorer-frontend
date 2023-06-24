import React from 'react';
import '../Auth.css';
import Auth from '../Auth';
import { USER_NAME_REGEX } from '../../../utils/constants';
import useAuthForm from '../../../hooks/useAuthForm';


const Register = ({ onRegister, onLoading, errorMessage }) => {
  const { values, errors, handleChange, isFormValid } = useAuthForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <Auth
      title="Добро пожаловать!"
      btnText={onLoading ? "Регистрация..." : "Зарегистрироваться"}
      question="Уже зарегистрированы?"
      link="/signin"
      linkText="Войти"
      onSubmit={handleSubmit}
      isDisabled={!isFormValid}
      onLoading={onLoading}
      errorMessage={errorMessage}
    >
      <label className="auth__field">
        Имя
        <input
          value={values.name || ''}
          onChange={handleChange}
          pattern={USER_NAME_REGEX}
          name="name"
          className="auth__input"
          autoComplete="off"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="30"
          required
        />
        <span className={`auth__input-error ${errors.name && 'auth__input-error_active'}`}>
          {errors.name}
        </span>
      </label>
      <label className="auth__field">
        E-mail
        <input
          value={values.email || ''}
          onChange={handleChange}
          name="email"
          className="auth__input"
          autoComplete="off"
          id="email-input"
          type="email"
          required
        />
        <span className={`auth__input-error ${errors.email && 'auth__input-error_active'}`}>
          {errors.email}
        </span>
      </label>
      <label className="auth__field">
        Пароль
        <input
          value={values.password || ''}
          onChange={handleChange}
          name="password"
          className="auth__input"
          id="password-input"
          type="password"
          required
        />
        <span className={`auth__input-error ${errors.password && 'auth__input-error_active'}`}>
          {errors.password}
        </span>
      </label>
    </Auth>

  )
}

export default Register;
