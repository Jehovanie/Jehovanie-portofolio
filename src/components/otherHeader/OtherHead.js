import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import CTA from '../header/CTA';
import DEV from '../../assets/image-5.png';
import "./other_head.css";
import HeaderSocial from '../header/HeaderSocial';


const OtherHead = () => {
    return (
        <header>
            <div className="container header__container">

                <div className='left__side'>
                    <h5> Hello I'm</h5>
                    <Zoom right cascade>
                        <div className='content__name'>
                            <Zoom right cascade>
                                <h1>Jehovanie </h1>
                            </Zoom>
                            <Zoom right cascade>
                                <h1>RAMANDRIJOEL</h1>
                            </Zoom>
                        </div>
                    </Zoom>

                    <Flip bottom cascade>
                        <h5 className='text-light'>Web Developpeur</h5>
                    </Flip>
                    <CTA />
                    <HeaderSocial />
                </div>

                <div className='right__side'>
                    <div className='dev'>
                        <img src={DEV} alt="Image 1" />
                    </div>
                </div>

                <a href="#contact" className='scroll__down'> {'>>>>>>'}   Scroll Down  {'>>>>>'}  </a>

            </div>
        </header>
    );
};

export default OtherHead;