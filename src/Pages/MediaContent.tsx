import React from "react";
import human from '../assets/Human-music.gif'
// import music from ""
import Header from "../Components/Header/Header";
import '../styles/MediaContent.css'

const MediaContent = () => {
    return (
        <div className="media-content">
            <video className="media-video" width="100%" autoPlay muted loop>
                <source src="./pexels-weldi-studio-design-8675541.mp4" type="video/mp4"/>
            </video>
            <Header/>
            <div className="container">
                <div className="media-content__content">
                    <img className="media-img" src={human}/>
                    <audio controls className="media-audio">
                        <source src='/ofenbach-be-mine.mp3'/>
                    </audio>
                </div>
            </div>
        </div>
    )
};

export default MediaContent;