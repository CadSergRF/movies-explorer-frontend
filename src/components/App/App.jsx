

import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from '../Common/Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../AuthComponents/Profile/Profile';
import Login from '../AuthComponents/Login/Login';
import Register from '../AuthComponents/Register/Register';
import Footer from '../Common/Footer/Footer';

function App() {

  const isLoggedIn = false;
  return (
    <div className="root">
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={<Main />}
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
          element={<Profile />}
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

      <Footer />
    </div>
  );
}

export default App;
