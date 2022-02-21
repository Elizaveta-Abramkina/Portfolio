import React, {useState} from "react";
import '../../styles/Header.css';
import logo from '../../assets/Logo.png';
import {Link} from "react-router-dom";
import SignUpModal from "./SignUpModal";



const Header: React.FC= () => {
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
                            <Link className='menu__link' to="/">Home</Link>
                            <Link className='menu__link' to='/chartjs'>Chart JS</Link>
                            <Link className='menu__link' to="/media-content">Media content</Link>
                            <Link className='menu__link' to="/store">Store</Link>
                            <Link className='menu__link' to='/questions'>Questions</Link>
                        </div>
                    </div>
                    <div className='header__right-column'>
                        <button className='button button_mode_simple'>Log In</button>
                        <button className='button button_mode_accent' onClick={() => setOpen(true)}>Sign Up</button>
                    </div>
                    <SignUpModal isOpen={open} onClose={handleClose}/>
                </div>
            </div>
        </div>
    )
}

export default Header;