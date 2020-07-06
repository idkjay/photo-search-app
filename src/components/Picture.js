import React, { useState, useEffect } from "react";

const Picture = ({picture}) => {
     const [ show, setShow ] = useState(false);

    const showShow = () => {
        setShow(true)

    }
    return(
        <div className="picture">
            <img className="image" src={picture.image} alt="" />
            {show}
        </div>
    )
}

export default Picture;