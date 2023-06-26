import React from 'react';
import './SearchMovieErr.css';

function SearchMovieErr({ errorText }) {
  return <p className="search__error">{errorText}</p>;
}

export default SearchMovieErr;
