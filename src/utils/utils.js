import { BASE_URL_AUTH } from './constants';

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
