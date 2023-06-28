import React from 'react';
import './BurgerMenu.css';
import { Link, NavLink } from 'react-router-dom';

const BurgerMenu = ({ isOpen, onOpen, onClose }) => {
  return (
    <div
      className={`burger ${isOpen ? "burger_opened" : ""}`}
      onMouseDown={(evt) => evt.target === evt.currentTarget && onClose()}
    >
      <div className={`burger__container ${isOpen ? "burger__container_opened" : ""}`}>
        <button
          className="burger__close-btn"
          type="button"
          aria-label="Кнопка закрытия всплывающего меню"
          onClick={onClose}>
        </button>
        <nav className="burger__nav">
          <NavLink
            to="/"
            className={({ isActive }) => `burger__link ${isActive && 'burger__link_active'}`}
            onClick={onClose}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => `burger__link ${isActive && 'burger__link_active'}`}
            onClick={onClose}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) => `burger__link ${isActive && 'burger__link_active'}`}
            onClick={onClose}
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <Link
          to="/profile"
          className="burger__profile"
          onClick={onClose}
        >
          Аккаунт
        </Link>
      </div>
    </div>
  )
}

export default BurgerMenu
