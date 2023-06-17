
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../AuthComponents/Profile/Profile';
import Login from '../AuthComponents/Login/Login';
import Register from '../AuthComponents/Register/Register';
import NotFound from '../NotFound/NotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function App() {

  const isLoggedIn = false;  // Для эмуляции логина
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurgerOpen() {
    setIsBurgerOpen(true)
  }

  function handleBurgerClose() {
    setIsBurgerOpen(false)
  }

  return (
    <div className="root">
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
            isLoggedIn={isLoggedIn}
            onBurgerOpen={handleBurgerOpen}
          />}
        />
        <Route
          path="/signin"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Register />}
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
    </div>
  );
}

export default App;
