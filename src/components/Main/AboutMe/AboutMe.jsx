import './AboutMe.css';
import React from 'react';
import photo from '../../../images/Avatar_face.jpeg';

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__name">Сергей</h3>
          <p className="about-me__info">Фронтенд-разработчик, 42 года</p>
          <p className="about-me__description">
            Добрый день. Меня зовут Сергей. Полтора года назад я решил реализовать свою юношескую
            мечту и связать свою жизнь с программированием. Выбрал направление
            frontend-разработки, т.к. ранее имел опыт создания сайтов на Wordpress и конструкторах.
            В настоящее время самостоятельно изучаю React, Redux, Nest и Typescript. Параллельно
            работаю над коммерческим проектом по созданию сайта интернет-магазина. В ближайших планах - повышение уровня владения английским языком
          </p>
          <a
            href="https://github.com/CadSergRF"
            className="about-me__link"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </div>
        <img src={photo} alt="Фотография студента" className="about-me__photo" />
      </div>
    </section>
  )
}

export default AboutMe
