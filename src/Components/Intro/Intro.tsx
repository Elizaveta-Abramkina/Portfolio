import React from "react";
import "./Intro.css"


const Intro = () => {
    return (
        <div className='intro'>
            <div className="container">
                <div className="intro__content">
                    <h1 className='intro__title text_type_accent'>Bootstrap 5 theme</h1>
                    <text>
                        <text className='intro__subtitle'> crafted by</text>
                        <text className='intro__subtitle' style={{fontWeight: "bold"}}>ThemeWagon</text>
                    </text>
                    <p className='intro__text text_type_simple'>
                        ThemeWagon offers an wide array of
                        category-oriented<br/>
                        Free and Premium Bootstrap HTML Templates and Themes.
                    </p>
                    <button className='intro__button text_type_simple'><b>Check Demo</b></button>
                </div>
            </div>
        </div>
    )
}

export default Intro;