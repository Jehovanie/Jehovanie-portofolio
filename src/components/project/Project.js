import React from 'react';
import './project.css';
import IMG1 from '../../assets/model-1.jpg';
import IMG2 from '../../assets/model-2.jpg';
import IMG3 from '../../assets/model-3.jpg';
import IMG4 from '../../assets/model-4.jpg';

const Project = () => {
    return (
        <section id="#project">
            <h5> My Recent Work</h5>
            <h2> Portfolio </h2>

            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="project image" />
                    </div>
                    <h3> This is a project item title </h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn' target="_blank">
                            Github
                        </a>
                        <a href="https://linkedin.com" className='btn btn-primary' target="_blank">
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="project image" />
                    </div>
                    <h3> This is a project item title </h3>

                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn' target="_blank">
                            Github
                        </a>
                        <a href="https://linkedin.com" className='btn btn-primary' target="_blank">
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="project image" />
                    </div>
                    <h3> This is a project item title </h3>

                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn' target="_blank">
                            Github
                        </a>
                        <a href="https://linkedin.com" className='btn btn-primary' target="_blank">
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="project image" />
                    </div>
                    <h3> This is a project item title </h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn' target="_blank">
                            Github
                        </a>
                        <a href="https://linkedin.com" className='btn btn-primary' target="_blank">
                            Live Demo
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Project;