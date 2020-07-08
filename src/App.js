import React, { useState, useEffect } from "react";
import './styles/App.css';
import Footer from './components/Footer';

function App() {
  const unsplashAccessKey = 'XRaYqLejjhPT9zoUTCabwHUTLeJ8r69hbSQbMi76bMM';
  const unsplashSecretKey = '6JiHkmSXYzWQ2MrqWj692DgFVl55IW4g1O09NNJZDnE';
  const APP_ID = '30cd12a7';
  const APP_KEY = '8384a09737074e2b9dace4d37a377de1';

  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [search, setSearch] = useState('');
  const [background, setBackground] = useState(true)
  // const [searchbar, setSearchbar] = useState(true)

   useEffect(() => {
     getPictures();
     // eslint-disable-next-line
   }, [query]);

   const getPictures = async () => {
     const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=30&client_id=${unsplashAccessKey}`);
     const data = await response.json();
     setPictures(data.results);
   };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
    setBackground(false)
    // setSearchbar(false)
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Image Searcher</h1>
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Search Images"
          />
        </form>

      </div>
        {pictures.map((photo) => (
            <img src={photo.urls.small} alt={photo.alt_description}/>
          ))}


      <Footer />

    </div>
  )
}

export default App;
