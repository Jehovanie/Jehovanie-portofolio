import React from 'react';
import CTA from './CTA';
import ME from '../../assets/image-3.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm</h5>
                <h1> Jehovanie RAMANDRIJOEL</h1>
                <h5 className='text-light'> Front-End Developpeur React and Angular</h5>
                <CTA />
            <HeaderSocial />
            <div className="me">
                <img src={ME} alt="Image 1" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>
        </header>
    );
};

export default Header;