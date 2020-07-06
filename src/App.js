import React, { useState, useEffect } from "react";
import './styles/App.css';

function App() {
  const [pictures, setPictures] = useState([]);
  const [search, setSearch] = useState('');
  const [background, setBackground] = useState(true);

  const unsplashAccessKey = 'XRaYqLejjhPT9zoUTCabwHUTLeJ8r69hbSQbMi76bMM';
  const unsplashSecretKey = '6JiHkmSXYzWQ2MrqWj692DgFVl55IW4g1O09NNJZDnE';

  const APP_ID = '30cd12a7';
  const APP_KEY = '8384a09737074e2b9dace4d37a377de1';

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setSearch('');
    setBackground(false)
  };

  const getPictures = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setPictures(data.hits);
  };

  return (
    <div className="app">
      {background &&
        <div>
          <img className="background-pic" src="https://cdn.kapwing.com/final_5e51a3107818cb00168bd148_236835.gif"></img>
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
      }
    </div>
  )
}

export default App;
