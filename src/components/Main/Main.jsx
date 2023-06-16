import './Main.css';
import React from 'react';
import Header from '../Common/Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Tech from './Techs/Tech';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

const Main = ({ isLoggedIn }) => {

  return (
    <main>
      <Header isLoggedIn={isLoggedIn} />
      <Promo />
      <AboutProject />
      <Tech />
      <AboutMe />
      <Portfolio />
    </main>
  )
}

export default Main
