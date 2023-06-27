import './MoviesCardList.css';
import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import SearchMovieErr from '../SearchMovieErr/SearchMovieErr';
import { ERR_REQ_MESSAGE, ERR_NOT_FOUND } from '../../utils/messageConstants';
import {
  RES_BIG,
  RES_MIDDLE,
  SHOW_RES_BIG,
  SHOW_RES_MIDDLE,
  SHOW_RES_SMALL,
  ADD_RES_BIG,
  ADD_RES_MIDDLE,
} from '../../utils/constants';

const MoviesCardList = ({ isCardsFromSaved, cards, savedCards, isLoading, errReq, isNotFound, handleSaveCard, handleDeleteCard }) => {
  const location = useLocation();

  const [quantityLoad, setQuantityLoad] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const visibleMovies = cards.slice(0, quantityLoad);

  function checkQuantityCards() {
    setTimeout(() => {
      const sizeWindow = document.documentElement.clientWidth;
      setWindowWidth(sizeWindow)
      if (sizeWindow > RES_BIG) {
        setQuantityLoad(SHOW_RES_BIG);
      } else if (sizeWindow > RES_MIDDLE && sizeWindow <= RES_BIG) {
        setQuantityLoad(SHOW_RES_MIDDLE);
      } else {
        setQuantityLoad(SHOW_RES_SMALL);
      }
    }, 100);
  }

  const checkShowMoreActive = () => {
    if (cards.length === visibleMovies.length) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    window.addEventListener('resize', checkQuantityCards.bind(this));
    checkQuantityCards();
    return window.removeEventListener('resize', checkQuantityCards.bind(this));
  }, []);

  const handleShowMore = () => {
    if (windowWidth > RES_BIG) {
      setQuantityLoad((l) => l + ADD_RES_BIG);
    } else {
      setQuantityLoad((l) => l + ADD_RES_MIDDLE);
    }
  };

  const getSavedCard = (savedCards, card) => {
    return savedCards.find((c) => {
      return c.movieId === (card.id || card.movieId);
    });
  }

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {!isLoading && errReq && <SearchMovieErr errorText={ERR_REQ_MESSAGE} />}
      {!isLoading && isNotFound && <SearchMovieErr errorText={ERR_NOT_FOUND} />}
      {!isLoading && !errReq && !isNotFound && (
        <>
          {location.pathname === "/saved-movies" ? (

            <ul className="cards__list">
              {cards.map((card) => (
                <MoviesCard
                  key={card._id || card.id}
                  isCardsFromSaved={isCardsFromSaved}
                  card={card}
                  savedCards={savedCards}
                  onDeleteCard={handleDeleteCard}
                />
              ))}
            </ul>

          ) : (
            <>
              <ul className="cards__list">
                {visibleMovies.map((card) => (
                  <MoviesCard
                    key={card._id || card.id}
                    saved={getSavedCard(savedCards, card)}
                    isCardsFromSaved={isCardsFromSaved}
                    card={card}
                    onSaveCard={handleSaveCard}
                    onDeleteCard={handleDeleteCard}
                  />
                ))}
              </ul>
              <div className="cards__btn-container">
                <button
                  type="button"
                  onClick={handleShowMore}
                  className={`cards__btn ${checkShowMoreActive() ? "cards__btn_active" : ""}`}
                >
                  Ещё
                </button>
              </div>
            </>
          )
          }
        </>
      )
      }
    </section>
  )
}

export default MoviesCardList
