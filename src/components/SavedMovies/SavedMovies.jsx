import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Common/Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Common/Footer/Footer';

import { handleFilterShort, handleFilterMovies } from '../../utils/utils';


const SavedMovies = ({ isLoggedIn, onBurgerOpen, isLoading, setIsLoading, savedCards, handleDeleteCard }) => {

  const [shortsMoviesCards, setShortsMoviesCards] = useState([]); // стейт с фильтром Shorts
  const [isNotFound, setIsNotFound] = useState(false); // ничего не найдено
  const [savedQuery, setSavedQuery] = useState(''); // запрос на время сессии
  const [isShortMovies, setIsShortMovies] = useState(false); // чекбокс поиска

  function handleSearchMovies(query) {
    setSavedQuery(query);
  }

  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);
  }

  useEffect(() => {
    const cardsList = handleFilterMovies(savedCards, savedQuery);
    console.log(cardsList);
    setShortsMoviesCards(isShortMovies ? handleFilterShort(cardsList) : cardsList);
  }, [savedCards, isShortMovies, savedQuery]);

  useEffect(() => {
    if (shortsMoviesCards.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [shortsMoviesCards]);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onBurgerOpen={onBurgerOpen}
      />
      <main>
        <SearchForm
          onSearchMovies={handleSearchMovies}
          onFilter={handleShortMovies}
        />
        <MoviesCardList
          isCardsFromSaved={true}
          cards={shortsMoviesCards}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          isNotFound={isNotFound}
          handleDeleteCard={handleDeleteCard}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
