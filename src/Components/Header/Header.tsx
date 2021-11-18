import React, {useState} from "react";
import '../../styles/Header.css';
import logo from '../../assets/Logo.png';
import {NavLink} from "react-router-dom";
import SignUpModal from "./SignUpModal";
import * as events from "events";


const Header = () => {
    const [open, setOpen] = useState<boolean>(false)

    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setOpen(false)
        e.stopPropagation()
    }
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
                            <NavLink className='menu__link' to="/">Home</NavLink>
                            <NavLink className='menu__link' to='chartjs'>Chart JS</NavLink>
                            <NavLink className='menu__link' to="media-content">Media content</NavLink>
                            <a className='menu__link' href='#'>News</a>
                            <a className='menu__link' href='#'>Contact</a>
                        </div>
                    </div>
                    <div className='header__right-column'>
                        <a className='button button_mode_simple' href='#'>Log In</a>
                        <a className='button button_mode_accent' onClick={() => setOpen(true)}>Sign Up</a>

                    </div>
                    <SignUpModal isOpen={open} onClose={handleClose}/>
                </div>
            </div>
        </div>
    )
}

export default Header;