import './Main.css';
import React from 'react';
import Header from '../Common/Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Tech from './Techs/Tech';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Common/Footer/Footer';

const Main = ({ isLoggedIn, onBurgerOpen }) => {

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onBurgerOpen={onBurgerOpen}
      />
      <main>
        <Promo />
        <AboutProject />
        <Tech />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main
