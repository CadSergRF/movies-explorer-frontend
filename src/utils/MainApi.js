import { makeRequest } from './utils.js';

export function register({ name, email, password }) {
  return makeRequest("/signup", "POST", { name, email, password });
}

export function authorize({ email, password }) {
  return makeRequest("/signin", "POST", { email, password });
}

export function logout() {
  return makeRequest("/signout", "POST", undefined);
}

export function getUserInfo() {
  return makeRequest("/users/me", "GET", undefined);
}

export function updateUserInfo({ email, name }) {
  return makeRequest("/users/me", "PATCH", { email, name });
}

export function checkCookies() {
  return makeRequest("/users/me", "GET", undefined);
}
