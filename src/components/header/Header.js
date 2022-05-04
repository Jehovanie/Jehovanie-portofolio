import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import CTA from './CTA';
import ME from '../../assets/image-3.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm</h5>
                <Zoom right cascade>
                    <h1>Jehovanie RAMANDRIJOEL</h1>
                </Zoom>
                <Flip bottom cascade>
                    <h5 className='text-light'>Web Developpeur</h5>
                </Flip>
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