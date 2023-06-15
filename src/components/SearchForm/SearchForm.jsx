import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" id="search-form">
          <label className="search__label"></label>
          <input
            name="query"
            className="search__input"
            id="search-input"
            type="text"
            placeholder="Фильм">
          </input>
          <button className="search__button" type="submit"></button>
        </form>
        <FilterCheckbox />
      </div>
      <div className="spacer"></div>
    </section>
  )
}

export default SearchForm
