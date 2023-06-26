import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import Header from '../../Common/Header/Header';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import useAuthForm from '../../../hooks/useAuthForm';
import { USER_NAME_REGEX, USER_EDIT_SUCCESS } from '../../../utils/constants';

const Profile = ({ onEditProfile, onSignOut, onLoading, isLoggedIn, onBurgerOpen, isSuccess, errorMessage }) => {

  const currentUserData = useContext(CurrentUserContext);
  const [isChangeValues, setIsChangeValues] = useState(false);
  const { values, errors, handleChange, isFormValid, resetForm } = useAuthForm();

  useEffect(() => {
    if (currentUserData) {
      resetForm(currentUserData);
    }
  }, [currentUserData, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onEditProfile(values);
  }

  useEffect(() => {
    if (currentUserData.name === values.name && currentUserData.email === values.email) {
      setIsChangeValues(true);
    } else {
      setIsChangeValues(false);
    }
  }, [currentUserData, values]);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onBurgerOpen={onBurgerOpen}
      />
      <main className="profile">
        <h3 className="profile__title">Привет, {values.name}!</h3>
        <form className="profile__form">
          <div className="profile__inputs">
            <label className="profile__field">
              Имя
              <input
                value={values.name || ''}
                onChange={handleChange}
                pattern={USER_NAME_REGEX}
                name="name"
                className="profile__input"
                id="name-input"
                type="text"
                minLength="2"
                maxLength="40"
                required
              />
              {errors.name && <span className="profile__input-error">{errors.name}</span>}
            </label>
            <div className="profile__spacer"></div>
            <label className="profile__field">
              E-mail
              <input
                value={values.email || ''}
                onChange={handleChange}
                name="email"
                className="profile__input"
                id="name-input"
                type="text"
                minLength="2"
                maxLength="40"
                required
              />
              {errors.email && <span className="profile__input-error">{errors.email}</span>}
            </label>
          </div>
          <div className="profile__buttons">
            <button
              type="submit"
              className={`profile__btn ${!isFormValid || onLoading || isChangeValues ? "profile__btn_disabled" : ""}`}
              onClick={handleSubmit}
            >
              {isSuccess && <span className="profile__form-success">{USER_EDIT_SUCCESS}</span>}
              {errorMessage && <span className="profile__btn-error">{errorMessage}</span>}
              Редактировать
            </button>
            <button
              type="button"
              className="profile__btn profile__btn_logout"
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Profile;
