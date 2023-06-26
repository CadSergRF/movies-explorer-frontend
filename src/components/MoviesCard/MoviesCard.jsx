import './MoviesCard.css';
import React from 'react';
import { useLocation } from "react-router-dom";

import { durationMovieConverter } from '../../utils/utils';
import { FILMS_URL_PREVIEW } from '../../utils/constants';

const MoviesCard = ({ saved, isCardsFromSaved, card, savedCards, onSaveCard, onDeleteCard }) => {

  const location = useLocation();

  function onCardClick() {
    if (saved) {
      onDeleteCard(card);
    } else {
      onSaveCard(card);
    }
  }

  function onDelete() {
    onDeleteCard(card);
  }

  return (
    <li className="card">
      <article className="card__item">
        <div className="card__container">
          <div className="card__info-params">
            <h2 className="card__text">{card.nameRU}</h2>
            <span className="card__time">{durationMovieConverter(card.duration)}</span>
          </div>
          {isCardsFromSaved ? (
            <button
              type="button"
              aria-label="Кнопка удаления фильма из Избранного"
              className="card__btn card__btn_delete"
              onClick={onDelete}>
            </button>
          ) : (
            <button
              type="button"
              aria-label="Кнопка сохранения фильма в Избранное"
              className={`card__btn ${saved ? 'card__btn_save_active' : 'card__btn_save'}`}
              onClick={onCardClick}>
            </button>
          )
          }
        </div>
        <img
          className="card__image"
          alt={card.nameRU}
          src={
            location.pathname === "/movies"
              ? `${FILMS_URL_PREVIEW}${card.image.url}`
              : `${card.image}`
          }
        />
      </article>
    </li>
  )
}

export default MoviesCard
