import React from 'react';
import './SearchMovieErr.css';

function SearchMovieErr({ errorText }) {
  return <p className="search__error-message">{errorText}</p>;
}

export default SearchMovieErr;
