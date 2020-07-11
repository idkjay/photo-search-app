import React, { useState, useEffect } from "react";
import './styles/App.css';
import Footer from './components/Footer';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function App() {
  const unsplashAccessKey = 'XRaYqLejjhPT9zoUTCabwHUTLeJ8r69hbSQbMi76bMM';
  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [search, setSearch] = useState('');
  const [background, setBackground] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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
        <a href="/" id="logo"><img className="camera" alt="logo" src="https://i.imgur.com/Wp8kohD.png"></img></a>
        <a href="/"><h1>Camera Roll</h1></a>
        <form onSubmit={getSearch} className="search-form">
          <i onClick={getSearch} class="fa fa-search" type="submit"></i>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Search Photos"
          />
        </form>
      </div>
      <div className="photo-grid">
        {background &&
          <img className="background" src="https://cdn.kapwing.com/final_5e51a3107818cb00168bd148_236835.gif" alt="background"></img>
        }
        {pictures.length === 0 ? null : pictures.map((photo, index) => {
          return (
            <div onClick={() => {setIsOpen(true); setPhotoIndex(index)}}>
              <img
                src={photo.urls.small}
                alt="photos of searched"
                style={{ width: "100%" }}
                className="images"
              />
            </div>
          );
        })}
      </div>
      {isOpen &&
        <Lightbox
            mainSrc={pictures[photoIndex].urls.raw}
            nextSrc={pictures[(photoIndex + 1) % pictures.length].urls.raw}
            prevSrc={pictures[(photoIndex + pictures.length - 1) % pictures.length].urls.raw}
            onCloseRequest={() => (setIsOpen(false))}
            onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + pictures.length - 1) % pictures.length)
            }
            onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % pictures.length)
            }
            imageTitle={<a className="unsplash-user" href={pictures[photoIndex].user.links.html}><i className="fa fa-camera"></i> {pictures[photoIndex].user.name} on Unsplash</a>}
            imageCaption={pictures[photoIndex].description}
        />
      }
      <Footer />
    </div>
  )
}

export default App;
