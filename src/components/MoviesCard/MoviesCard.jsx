import './MoviesCard.css';
import React from 'react';

const MoviesCard = ({ card, isSavedMovie }) => {

  return (
    <li className="card">
      <article className="card__item">
        <div className="card__container">
          <div className="card__info-params">
            <h2 className="card__text">{card.name}</h2>
            <span className="card__time">{card.time}</span>
          </div>
          {isSavedMovie
            ? (<button
              type="button"
              aria-label="Кнопка сохранения фильма в Избранное"
              className={`card__btn ${card.saved ? 'card__btn_save_active' : 'card__btn_save'}`}>
            </button>)
            : (<button
              type="button"
              aria-label="Кнопка удаления фильма из Избранного"
              className={'card__btn card__btn_delete'}>
            </button>)
          }
        </div>
        <img
          className="card__image"
          alt={card.name}
          src={card.image}
        />
      </article>
    </li>
  )
}

export default MoviesCard
