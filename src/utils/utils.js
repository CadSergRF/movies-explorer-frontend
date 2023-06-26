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
  return `${hours}ч ${minutes}м`;
}

export const moviesFilter = (listMovies, query, filter = false) => {
  // if (!filter) {
  //   return listMovies.filter((movie) => movie.nameRU.toLowerCase().includes(query.toLowerCase()));
  // }
  // return listMovies
  //   .filter((movie) => movie.nameRU.toLowerCase().includes(query.toLowerCase()))
  //   .filter((movie) => movie.duration <= SHORT_FILM_DURATION);
};
