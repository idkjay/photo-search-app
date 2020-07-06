import React, { useState, useEffect } from "react";

const Picture = ({results}) => {



    return(
        <div className="picture">
            <img className="image" src={results.urls.raw} alt="" />

        </div>
    )
}

export default Picture;