
import { useState, useCallback, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';

import * as mainApi from '../../utils/MainApi.js';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../AuthComponents/Profile/Profile';
import Login from '../AuthComponents/Login/Login';
import Register from '../AuthComponents/Register/Register';
import NotFound from '../NotFound/NotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ProtectedRoute from '../Common/ProtectedRoute/ProtectedRoute';

import { FILMS_URL_PREVIEW } from '../../utils/constants';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedCards, setSavedCards] = useState([]);

  const navigate = useNavigate();

  function handleBurgerOpen() {
    setIsBurgerOpen(true)
  }

  function handleBurgerClose() {
    setIsBurgerOpen(false)
  }

  //регистрация пользователя
  const handleUserRegister = async ({ name, email, password }) => {
    setLoading(true);
    try {
      const registerData = await mainApi.register({ name, email, password });
      if (registerData) {
        handleUserLogin({ email, password });
        navigate("/movies", { replace: true });

      }
    } catch (err) {
      setErrorMessage(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  //авторизация пользователя
  const handleUserLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const loginData = await mainApi.authorize({ email, password });
      if (loginData) {
        setIsLoggedIn(true);
        checkLogin();
      }
    } catch (err) {
      setErrorMessage(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // проверка авторизации
  const checkLogin = useCallback(async () => {
    try {
      const userCokkies = await mainApi.checkCookies();
      setCurrentUser(userCokkies);
      setIsLoggedIn(true);
      navigate("/movies", { replace: true });
    } catch (err) {
      console.error(err);
    }
  }, [navigate])

  useEffect(() => {
    checkLogin();
  }, []);

  // logout
  const handleUserSignOut = async () => {
    try {
      await mainApi.logout();
      setIsLoggedIn(false);
      setCurrentUser({});
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
    }
  }

  // обновить данные пользователя
  const handleUpdateUser = async (userData) => {
    try {
      const newUserData = await mainApi.updateUserInfo(userData);
      setCurrentUser(newUserData);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      setErrorMessage(err);
      console.error(err);
    }
  }

  const handleSaveCard = async (card) => {
    try {
      const savedCard = await mainApi.createCard({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: `${FILMS_URL_PREVIEW}${card.image.url}`,
        trailerLink: card.trailerLink,
        thumbnail: `${FILMS_URL_PREVIEW}${card.image.formats.thumbnail.url}`,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      });
      setSavedCards([savedCard, ...savedCards])
    } catch (error) {
      console.log(error)
    }

  }

  const handleDeleteMovie = async (movie) => {
    try {
      const movieOnDelete = savedMovies.find(
        (m) => m.movieId === (movie.id || movie.movieId)
      );
      const deleteMovie = await mainApi.deleteCard(movieOnDelete._id);
      if (deleteMovie) {
        const newStateSavedMovies = savedMovies.filter((m) => m.movieId !== movie.id);
        setSavedMovies(newStateSavedMovies);
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={<Main
              isLoggedIn={isLoggedIn}
              onBurgerOpen={handleBurgerOpen}
            />}
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isLoggedIn={isLoggedIn}
                onBurgerOpen={handleBurgerOpen}
              />}
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
                onBurgerOpen={handleBurgerOpen}
              />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                onEditProfile={handleUpdateUser}
                onSignOut={handleUserSignOut}
                onLoading={isLoading}
                isLoggedIn={isLoggedIn}
                onBurgerOpen={handleBurgerOpen}
                isSuccess={isSuccess}
                errorMessage={errorMessage}
              />}
          />
          <Route
            path="/signin"
            element={
              <Login
                onLogin={handleUserLogin}
                onLoading={isLoading}
                errorMessage={errorMessage}
              />}
          />
          <Route
            path="/signup"
            element={
              <Register
                onRegister={handleUserRegister}
                onLoading={isLoading}
                errorMessage={errorMessage}
              />}
          />
          <Route
            path="/*"
            element={<NotFound />}
          />
        </Routes>
        <BurgerMenu
          isOpen={isBurgerOpen}
          onOpen={handleBurgerOpen}
          onClose={handleBurgerClose}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
