import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Gallery from 'react-grid-gallery';
import { render } from 'react-dom';



const Picture = ({results}) => {
    return(

        <Gallery
            images={results.urls.raw}
        />
    )
}

export default Picture;