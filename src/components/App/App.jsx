
import { useState, useCallback } from 'react';
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

function App() {

  // const isLoggedIn = false;  // Для эмуляции логина
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});

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
        navigate("/movies", { replace: true });
        checkLogin();
      }
    } catch (err) {
      setErrorMessage(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const checkLogin = useCallback(async () => {
    try {
      const userCokkies = await mainApi.checkCookies();
      setCurrentUser(userCokkies);
      setIsLoggedIn(true);
    } catch (err) {
      console.error(err);
    }
  }, [])

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
            element={<Movies
              isLoggedIn={isLoggedIn}
              onBurgerOpen={handleBurgerOpen}
            />}
          />
          <Route
            path="/saved-movies"
            element={<SavedMovies
              isLoggedIn={isLoggedIn}
              onBurgerOpen={handleBurgerOpen}
            />}
          />
          <Route
            path="/profile"
            element={<Profile
              onSignOut={handleUserSignOut}
              isLoggedIn={isLoggedIn}
              onBurgerOpen={handleBurgerOpen}
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
