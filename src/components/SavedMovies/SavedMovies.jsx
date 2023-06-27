import React from 'react';
import { useState } from 'react';
import Header from '../Common/Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Common/Footer/Footer';

import { handleFilterShort, handleFilterMovies } from '../../utils/utils';


const SavedMovies = ({ isLoggedIn, onBurgerOpen, isLoading, setIsLoading, savedCards, handleDeleteCard }) => {

  const [queriedMoviesCards, setQueriedMoviesCards] = useState([]); // стейт карточек по запросу
  const [shortsMoviesCards, setShortsMoviesCards] = useState([]); // стейт с фильтром Shorts
  const [isNotFound, setIsNotFound] = useState(false); // ничего не найдено

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onBurgerOpen={onBurgerOpen}
      />
      <main>
        <SearchForm />
        <MoviesCardList
          isCardsFromSaved={true}
          cards={savedCards}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          handleDeleteCard={handleDeleteCard}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
