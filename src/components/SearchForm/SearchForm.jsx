import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({ onSearchMovies, onFilter, isShortMovies }) => {
  const [isQueryErr, setIsQueryErr] = useState(false);
  const [query, setQuery] = useState('');
  const location = useLocation();

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryErr(true);
      setTimeout(() => {
        setIsQueryErr(false);
      }, 1500);
    } else {
      setIsQueryErr(false);
      onSearchMovies(query);
    }
  }

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('movieSearch')) {
      const localQuery = localStorage.getItem('movieSearch');
      setQuery(localQuery);
    }
  }, [location]);

  return (
    <section className="search">
      <div className="search__container">
        <form
          className="search__form"
          id="search-form"
          onSubmit={handleSubmit}>
          <label className="search__label"></label>
          <input
            name="query"
            className="search__input"
            id="search-input"
            type="search"
            placeholder="Фильм"
            onChange={handleChangeQuery}
            value={query || ''}
          >
          </input>
          <button className="search__button" type="submit"></button>
        </form>
        <FilterCheckbox onFilter={onFilter} isShortMovies={isShortMovies} />
        {isQueryErr && <span className="search__error">Нужно ввести запрос</span>}
      </div>
      <div className="spacer"></div>
    </section>
  )
}

export default SearchForm
