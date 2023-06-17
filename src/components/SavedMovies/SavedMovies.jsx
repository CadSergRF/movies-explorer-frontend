import React from 'react';
import Header from '../Common/Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Common/Footer/Footer';

import { movies } from '../../_FAKE/fakeMovies';

const SavedMovies = ({ isLoggedIn, onBurgerOpen }) => {
  const isSavedMovie = false;
  const savedMovies = movies.filter((card) => card.saved === true);
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onBurgerOpen={onBurgerOpen}
      />
      <SearchForm />
      <MoviesCardList cards={savedMovies} isSavedMovie={isSavedMovie} />
      <Footer />
    </>
  )
}

export default SavedMovies
