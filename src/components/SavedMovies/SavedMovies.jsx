import React from 'react';
import Header from '../Common/Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Common/Footer/Footer';


const SavedMovies = ({ isLoggedIn, onBurgerOpen, isLoading, setIsLoading, savedCards, handleDeleteCard }) => {


  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onBurgerOpen={onBurgerOpen}
      />
      <main>
        <SearchForm />
        <MoviesCardList
          isCardsFromSaved={true}
          cards={savedCards}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          handleDeleteCard={handleDeleteCard}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies
