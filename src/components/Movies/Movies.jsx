import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Common/Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Common/Footer/Footer';

import * as moviesApi from '../../utils/MoviesApi';

import { handleFilterShort, handleFilterMovies } from '../../utils/utils';

const Movies = ({ isLoggedIn, onBurgerOpen, isLoading, setIsLoading, savedCards, handleSaveCard, handleDeleteCard }) => {

  const [allMoviesCards, setAllMoviesCards] = useState([]); // стейт со свеми карточками из beatsfilms
  const [queriedMoviesCards, setQueriedMoviesCards] = useState([]); // стейт карточек по запросу
  const [shortsMoviesCards, setShortsMoviesCards] = useState([]); // стейт с фильтром Shorts

  const [errReq, setErrReq] = useState(false); // ошибка запроса
  const [isNotFound, setIsNotFound] = useState(false); // ничего не найдено
  const [isShortMovies, setIsShortMovies] = useState(false); // чекбокс поиска

  // запрос к beats-films
  const getAllMovies = async () => {
    setIsLoading(true);
    try {
      const initialCards = await moviesApi.getCards();
      setAllMoviesCards(initialCards);
      localStorage.setItem('allMovies', JSON.stringify(initialCards));
    } catch (error) {
      setErrReq(true)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)

    }
  }

  // фильтруем по запросу и чекбоксу и записываем в стейты
  const handleFilterCards = (cards, query, short) => {
    const cardsList = handleFilterMovies(cards, query, short);
    setQueriedMoviesCards(cardsList);
    setShortsMoviesCards(short ? handleFilterShort(cardsList) : cardsList);
    localStorage.setItem('filteredMovies', JSON.stringify(cardsList));
  }

  // для чекбокса
  const handleShortMovies = () => {
    setIsShortMovies(!isShortMovies);
    if (!isShortMovies) {
      setShortsMoviesCards(handleFilterShort(queriedMoviesCards));
    } else {
      setShortsMoviesCards(queriedMoviesCards);
    }
    localStorage.setItem('shortFilterMovies', !isShortMovies);
  }

  // получаем начальный массив (из LS если нет то в апи) и отправляем на фильтр
  const handleSearchMovies = (query) => {
    console.log("Запрос " + query)
    localStorage.setItem('queryMovies', query);
    localStorage.setItem('shortFilterMovies', isShortMovies);

    if (localStorage.getItem('allMovies')) {
      const cardsFromLS = JSON.parse(localStorage.getItem('allMovies'));
      console.log("карточки из LS получены");
      handleFilterCards(cardsFromLS, query, isShortMovies);
      return;
    }

    console.log("Запрос на beats-movies");
    getAllMovies();
    handleFilterCards(allMoviesCards, query, isShortMovies);
  }

  // состояние чека при загрузке
  useEffect(() => {
    if (localStorage.getItem('shortFilterMovies') === 'true') {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  // проверяем, что было в поиске и заносим в стейт
  useEffect(() => {
    if (localStorage.getItem('filteredMovies')) {
      const movies = JSON.parse(localStorage.getItem('filteredMovies'));
      setQueriedMoviesCards(movies);
      if (localStorage.getItem('shortFilterMovies') === 'true') {
        setShortsMoviesCards(handleFilterShort(movies));
      } else {
        setShortsMoviesCards(movies);
      }
    }
  }, []);

  // обработка "ничего не найдено"
  useEffect(() => {
    if (localStorage.getItem('queryMovies')) {
      if (shortsMoviesCards.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
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
          isShortMovies={isShortMovies}
        />
        <MoviesCardList
          isCardsFromSaved={false}
          cards={shortsMoviesCards}
          savedCards={savedCards}
          isLoading={isLoading}
          errReq={errReq}
          isNotFound={isNotFound}
          handleSaveCard={handleSaveCard}
          handleDeleteCard={handleDeleteCard}
        />
      </main>
      <Footer />
    </>
  )
}

export default Movies
