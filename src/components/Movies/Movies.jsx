import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Common/Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Common/Footer/Footer';

import * as moviesApi from '../../utils/MoviesApi';

const Movies = ({ isLoggedIn, onBurgerOpen, isLoading, setIsLoading, savedCards, handleSaveCard, handleDeleteCard }) => {

  const [allMoviesCards, setAllMoviesCards] = useState([]); // стейт со свеми карточками из beatsfilms
  const [errReq, setErrReq] = useState(false); // ошибка запроса

  const getAllMovies = async () => {
    setIsLoading(true);
    try {
      const initialCards = await moviesApi.getCards();
      setAllMoviesCards(initialCards);
    } catch (error) {
      setErrReq(true)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)

    }
  }

  useEffect(() => {
    getAllMovies();
  }, [])

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onBurgerOpen={onBurgerOpen}
      />
      <main>
        <SearchForm />
        <MoviesCardList
          isCardsFromSaved={false}
          cards={allMoviesCards}
          savedCards={savedCards}
          isLoading={isLoading}
          errReq={errReq}
          handleSaveCard={handleSaveCard}
          handleDeleteCard={handleDeleteCard}
        />
      </main>
      <Footer />
    </>
  )
}

export default Movies
