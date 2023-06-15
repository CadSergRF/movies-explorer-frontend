import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { movies } from '../../_FAKE/fakeMovies';

const SavedMovies = () => {
  const isSavedMovie = false;
  const savedMovies = movies.filter((card) => card.saved === true);
  return (
    <>
      <SearchForm />
      <MoviesCardList cards={savedMovies} isSavedMovie={isSavedMovie} />
    </>
  )
}

export default SavedMovies
