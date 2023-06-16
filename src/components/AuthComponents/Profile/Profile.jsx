import React from 'react';
import './Profile.css';
import Header from '../../Common/Header/Header';

const Profile = ({ isLoggedIn }) => {

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="profile">
        <h3 className="profile__title">Привет, Сергей!</h3>
        <form className="profile__form">
          <div className="profile__inputs">
            <label className="profile__field">
              Имя
              <input
                value="Сергей"
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
                value="pochta@yandex.ru"
                name="name"
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
            <button className="profile__btn profile__btn_logout">
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Profile
