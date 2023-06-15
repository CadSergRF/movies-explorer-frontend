import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { movies } from '../../_FAKE/fakeMovies';

const Movies = () => {
  const isSavedMovie = true;
  return (
    <>
      <SearchForm />
      <MoviesCardList cards={movies} isSavedMovie={isSavedMovie} />
    </>
  )
}

export default Movies
