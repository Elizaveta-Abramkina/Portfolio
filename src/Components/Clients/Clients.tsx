import React from "react";
import './Clients.css'
import google from '../../assets/clients-logo/google.png'
import mailBlaster from '../../assets/clients-logo/mail-blaster.png'
import microsoft from '../../assets/clients-logo/microsoft.png'
import netflix from '../../assets/clients-logo/netflix.png'
import themeWagon from '../../assets/clients-logo/theme-wagon.png'

const Clients = () => {
    return (
        <div className="clients">
            <div className="container">
                <ul className='clients__list'>
                    <li className='clients__item'><img src={google} alt="google"/></li>
                    <li className='clients__item'><img src={mailBlaster} alt="mailBlaster"/></li>
                    <li className='clients__item'><img src={microsoft} alt="microsoft"/></li>
                    <li className='clients__item'><img src={netflix} alt="netflix"/></li>
                    <li className='clients__item'><img src={themeWagon} alt="themeWagon"/></li>
                </ul>
            </div>
        </div>
    )

}

export default Clients;