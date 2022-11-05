import React from 'react';
import ME from '../../assets/image/image-6.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import './about.css';

const About = () => {
    return (
        <section id="about">
            <h5> Get to Know</h5>
            <h2> About Me</h2>


            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5> Experience </h5>
                            <small> 2+ Years Working </small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5> Clients </h5>
                            <small>200+ Worldwide </small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5> Projects </h5>
                            <small> 10+ Completed </small>
                        </article>

                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corporis consectetur recusandae nesciunt ab, architecto obc
                        aecati illo, accusamus unde nisi facere fuga voluptates magni, ea autem impedit minima placeat odit. Officia.
                    </p>

                    <a href="#contact" className='btn btn-primary'>
                        Let's Talk
                    </a>

                </div>
            </div>
        </section>
    );
};

export default About;