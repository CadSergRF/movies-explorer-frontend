import './NavTab.css';
import React from 'react';
import { Link } from 'react-scroll';

const NavTab = () => {
  return (
    <nav className="nav-tab">
      <Link to="about-project" smooth={true} duration={800} className="nav-tab__btn">
        О проекте
      </Link>
      <Link to="tech" smooth={true} duration={800} className="nav-tab__btn">Технологии
      </Link>
      <Link to="about-me" smooth={true} duration={800} className="nav-tab__btn">Студент
      </Link>
    </nav>
  )
}

export default NavTab
