import './MoviesCardList.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ cards, isSavedMovie }) => {
  const { pathname } = useLocation();
  return (
    <section className="cards">
      <ul className="cards__list">
        {cards.map((card) => (
          <MoviesCard key={card._id} card={card} isSavedMovie={isSavedMovie} />
        ))}
      </ul>
      {(pathname === '/movies')
        && (<div className="cards__btn-container">
          <button className="cards__btn">Ещё</button>
        </div>)
      }

    </section>
  )
}

export default MoviesCardList
