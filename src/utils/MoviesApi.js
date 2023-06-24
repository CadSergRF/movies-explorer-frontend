import { _responceProcessing } from './utils';

import { FILMS_URL } from './constants';

// export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export function getCards() {
  return fetch(FILMS_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => _responceProcessing(res));
}
