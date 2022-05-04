import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './service.css';

const Services = () => {
    return (
        <section id="services">
            <h5> What I offer</h5>
            <h2> Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3> Front-End Developpement </h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Build web site static on HTML/CSS/JS.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Make responsive on web site.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Integrate web maquette design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Back-End Developpement</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Interact on the data base and the Front-end</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Make sur to the authentication/authorisation</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3> Data Base</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    );
};

export default Services;