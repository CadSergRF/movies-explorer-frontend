import React, { useContext } from 'react';
import './Profile.css';
import Header from '../../Common/Header/Header';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

const Profile = ({ onSignOut, isLoggedIn, onBurgerOpen }) => {

  const currentUserData = useContext(CurrentUserContext);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onBurgerOpen={onBurgerOpen}
      />
      <main className="profile">
        <h3 className="profile__title">Привет, Сергей!</h3>
        <form className="profile__form">
          <div className="profile__inputs">
            <label className="profile__field">
              Имя
              <input
                value={currentUserData.name}
                name="name"
                className="profile__input"
                id="name-input"
                type="text"
                minLength="2"
                maxLength="40"
                required
              />
            </label>
            <div className="profile__spacer"></div>
            <label className="profile__field">
              E-mail
              <input
                value={currentUserData.email}
                name="email"
                className="profile__input"
                id="name-input"
                type="text"
                minLength="2"
                maxLength="40"
                required
              />
            </label>
          </div>
          <div className="profile__buttons">
            <button type="submit" className="profile__btn">
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

export default Profile
