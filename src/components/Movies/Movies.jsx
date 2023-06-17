import React from 'react';
import Header from '../Common/Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Common/Footer/Footer';

import { movies } from '../../_FAKE/fakeMovies';

const Movies = ({ isLoggedIn, onBurgerOpen }) => {
  const isSavedMovie = true;
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onBurgerOpen={onBurgerOpen}
      />
      <SearchForm />
      <MoviesCardList cards={movies} isSavedMovie={isSavedMovie} />
      <Footer />
    </>
  )
}

export default Movies
