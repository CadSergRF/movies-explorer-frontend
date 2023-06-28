import './Footer.css';
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text footer__text_title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__text">&copy; 2023 Сергей Евдокимов</p>
        <nav className="footer__nav">
          <a
            href="https://practicum.yandex.ru"
            className="footer__link"
            target="_blank"
            rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/CadSergRF"
            className="footer__link"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
