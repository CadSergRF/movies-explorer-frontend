import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ onBurgerOpen }) => {
  return (
    <>
      <nav className="navigation__movies">
        <NavLink
          to="/movies"
          className={({ isActive }) => `navigation__link ${isActive && 'navigation__link_active'}`}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) => `navigation__link ${isActive && 'navigation__link_active'}`}
        >
          Сохранные фильмы
        </NavLink>
      </nav>
      <Link to="/profile" className="navigation__btn">
        Аккаунт
      </Link >
      <button className="burger-menu" onClick={onBurgerOpen}></button>
    </>
  )
}

export default Navigation
