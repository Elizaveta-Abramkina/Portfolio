import React from "react";
import "../styles/NotFound.css";
import notFound from "../assets/not-found.jpg";

const NotFound = () => {
    return(
        <div className="not-found">
            <img className="not-found__img" src={notFound} alt="404 not found"/>
            <p className="not-found__text text_type_accent">Page not found</p>
        </div>
    )
}

export default NotFound;