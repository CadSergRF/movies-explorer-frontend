

import { Routes, Route } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../AuthComponents/Profile/Profile';
import Login from '../AuthComponents/Login/Login';
import Register from '../AuthComponents/Register/Register';

function App() {

  const isLoggedIn = false;

  return (
    <div className="root">
      <Routes>
        <Route
          path="/"
          element={<Main
            isLoggedIn={isLoggedIn}
          />}
        />
        <Route
          path="/movies"
          element={<Movies />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies />}
        />
        <Route
          path="/profile"
          element={<Profile
            isLoggedIn={isLoggedIn}
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
      </Routes>
    </div>
  );
}

export default App;
