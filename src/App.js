import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PictureTile from "./components/PictureTile.js"

function App() {
  const [background, setBackground] = useState(true);

  return (
    <div className="background">
      <section className="section">
        {background &&
          <img className="background" src="https://cdn.kapwing.com/final_5e51a3107818cb00168bd148_236835.gif"></img>
        }
      </section>
    </div>
  )
}

export default App;
