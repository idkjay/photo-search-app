import React, { useState, useEffect } from "react";
import './styles/App.css';
import Footer from './components/Footer';

function App() {
  const unsplashAccessKey = 'XRaYqLejjhPT9zoUTCabwHUTLeJ8r69hbSQbMi76bMM';
  const unsplashSecretKey = '6JiHkmSXYzWQ2MrqWj692DgFVl55IW4g1O09NNJZDnE';

  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [search, setSearch] = useState('');
  const [background, setBackground] = useState(true)

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
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Unsplash Bot</h1>
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Search Photos on Unsplash"
          />
        </form>

      </div>
      <div className="photo-grid">
        {background &&
          <img className="background" src="https://cdn.kapwing.com/final_5e51a3107818cb00168bd148_236835.gif"></img>
        }
        {pictures.length === 0 ? null : pictures.map((photo) => {
          return (
            <img
              src={photo.urls.small}
              alt="photos of searched"
              style={{ width: "100%" }}
            />
          );
        })}
      </div>



      <Footer />
    </div>
  )
}

export default App;
