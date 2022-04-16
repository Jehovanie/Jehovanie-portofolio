import React from 'react';
import './testimonials.css';
import ME from '../../assets/avatar.jpg';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5> Review from client</h5>
            <h2> Testimonials</h2>

            <div className='container testimonials__container'>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={ME} alt="Avatar image" />
                    </div>
                    <h5 className='client__name'>Henitsoa Ramianadrizoary</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        In aut fuga pariatur tempore ex soluta assumenda officia maiores nesciunt sed, voluptas vel dolore neque illo doloribus eius labore modi aperiam?
                    </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={ME} alt="Avatar image" />
                    </div>
                    <h5 className='client__name'>Henitsoa Ramianadrizoary</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        In aut fuga pariatur tempore ex soluta assumenda officia maiores nesciunt sed, voluptas vel dolore neque illo doloribus eius labore modi aperiam?
                    </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={ME} alt="Avatar image" />
                    </div>
                    <h5 className='client__name'>Henitsoa Ramianadrizoary</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        In aut fuga pariatur tempore ex soluta assumenda officia maiores nesciunt sed, voluptas vel dolore neque illo doloribus eius labore modi aperiam?
                    </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={ME} alt="Avatar image" />
                    </div>
                    <h5 className='client__name'>Henitsoa Ramianadrizoary</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        In aut fuga pariatur tempore ex soluta assumenda officia maiores nesciunt sed, voluptas vel dolore neque illo doloribus eius labore modi aperiam?
                    </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={ME} alt="Avatar image" />
                    </div>
                    <h5 className='client__name'>Henitsoa Ramianadrizoary</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        In aut fuga pariatur tempore ex soluta assumenda officia maiores nesciunt sed, voluptas vel dolore neque illo doloribus eius labore modi aperiam?
                    </small>
                </article>

            </div>
        </section>
    );
};

export default Testimonials;