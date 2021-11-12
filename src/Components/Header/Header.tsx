import React from "react";
import './Header.css';
import logo from '../../assets/Logo.png';


const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className="header__content">
                    <div className='header__left-column'>
                        <div className='logo'>
                            <img className='logo__img' src={logo} alt='logo'/>
                            <h1 className='logo__text text_type_accent '>Klean</h1>
                        </div>

                        <div className='menu header__menu'>
                            <a className='menu__link' href='#'>Home</a>
                            <a className='menu__link' href='#'>Service</a>
                            <a className='menu__link' href='#'>Works</a>
                            <a className='menu__link' href='#'>News</a>
                            <a className='menu__link' href='#'>Contact</a>
                        </div>
                    </div>
                    <div className='header__right-column'>
                        <a className='header__button header__button_mode_simple' href='#'>Log In</a>
                        <a className='header__button header__button_mode_accent' href='#'>Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;