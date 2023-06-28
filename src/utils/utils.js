import { BASE_URL_AUTH, SHORT_FILM_DURATION } from './constants';

export const _responceProcessing = (res) => (res.ok)
  ? res.json()
  : res.json()
    .then((err) => Promise.reject(`${err.message}`));

export function makeRequest(url, method, body) {
  const headers = { "Content-Type": "application/json" };
  const config = { method, headers, credentials: 'include' };
  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${BASE_URL_AUTH}${url}`, config).then((res) => {

    return _responceProcessing(res);
  });
}

export function durationMovieConverter(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  if (hours < 1) {
    return `${minutes}м`
  } else if (minutes === 0) {
    return `${hours}ч`
  } else {
    return `${hours}ч ${minutes}м`;
  }
}

export function handleFilterShort(movies) {
  return movies.filter((movie) => movie.duration < SHORT_FILM_DURATION);
}

export function handleFilterMovies(movies, query) {
  const moviesByQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
  });
  return moviesByQuery;
}
