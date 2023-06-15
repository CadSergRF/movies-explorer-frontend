import './Portfolio.css';
import React from 'react';
import arrow from '../../../images/arrow.svg'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__list">
        <a
          href="https://cadsergrf.github.io/dreamstravel/"
          className="portfolio__link portfolio__link-border"
          target="_blank"
          rel="noreferrer">
          <p className="portfolio__text">Статичный сайт</p>
          <img className="portfolio__arrow" src={arrow} alt="" />
        </a>
        <a
          href="https://cadsergrf.github.io/cs_russian-travel/"
          className="portfolio__link portfolio__link-border"
          target="_blank"
          rel="noreferrer">
          <p className="portfolio__text">Адаптивный сайт</p>
          <img className="portfolio__arrow" src={arrow} alt="" />
        </a>
        <a
          href="https://mesto-csrf.nomoredomains.monster/sign-in"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer">
          <p className="portfolio__text">Одностраничное приложение</p>
          <img className="portfolio__arrow" src={arrow} alt="" />
        </a>
      </nav>
    </section>
  )
}

export default Portfolio
