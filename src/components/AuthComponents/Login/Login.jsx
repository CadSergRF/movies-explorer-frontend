import React from 'react';
import '../Auth.css';
import Auth from '../Auth';
import useAuthForm from '../../../hooks/useAuthForm';

const Login = ({ onLogin, onLoading, errorMessage }) => {
  const { values, errors, handleChange, isFormValid } = useAuthForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  }

  return (
    <Auth
      title="Рады видеть!"
      btnText={onLoading ? "Вход..." : "Войти"}
      question="Ещё не зарегистрированы?"
      link="/signup"
      linkText="Регистрация"
      onSubmit={handleSubmit}
      isDisabled={!isFormValid}
      onLoading={onLoading}
      errorMessage={errorMessage}
    >
      <label className="auth__field">
        E-mail
        <input
          value={values.email || ''}
          onChange={handleChange}
          name="email"
          className="auth__input"
          autoComplete="off"
          id="email-input"
          type="text"
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

export default Login
