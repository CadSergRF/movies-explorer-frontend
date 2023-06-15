import './Tech.css';
import React from 'react';

const Tech = () => {
  return (
    <section className="tech" id="tech">
      <h2 className="tech__title">Технологии</h2>
      <h3 className="tech__name">7 технологий</h3>
      <p className="tech__description">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="tech__list">
        <li>
          <a
            href="https://www.w3.org/standards/"
            target="_blank"
            rel="noreferrer"
            className="tech__list-link">
            HTML
          </a>
        </li>
        <li>
          <a
            href="https://www.w3.org/Style/CSS/Overview.en.html"
            target="_blank"
            rel="noreferrer"
            className="tech__list-link">
            CSS
          </a>
        </li>
        <li>
          <a
            href="https://learn.javascript.ru/"
            target="_blank"
            rel="noreferrer"
            className="tech__list-link">
            JS
          </a>
        </li>
        <li>
          <a
            href="https://ru.react.js.org/"
            target="_blank"
            rel="noreferrer"
            className="tech__list-link">
            React
          </a>
        </li>
        <li>
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noreferrer"
            className="tech__list-link">
            Git
          </a>
        </li>
        <li>
          <a
            href="https://expressjs.com/ru/"
            target="_blank"
            rel="noreferrer"
            className="tech__list-link">
            Express.js
          </a>
        </li>
        <li>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noreferrer"
            className="tech__list-link">
            mongoDB
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Tech
