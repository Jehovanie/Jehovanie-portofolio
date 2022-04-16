import React from 'react';
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";


const Contact = () => {
    return (
        <section id="contact">
            <h5>Get in Touch </h5>
            <h2> Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4> Email </h4>
                        <h5>jehovanieram@gmail.com</h5>
                        <a href="mailto:jehovanieram@gmail.com" target="_blank"> Send a message ...</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4> Messenger </h4>
                        <h5>Jehovanie Ram </h5>
                        <a href="https://www.facebook.com/jehovanie.ram.5" target="_blank"> Send a message ...</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4> WhatsApp </h4>
                        <h5>+261 34 79 476 16</h5>
                        <a href="https://api.whatsapp.com/send?phone=+261347947616" target="_blank"> Send a message ...</a>
                    </article>
                </div>

                <form action="">
                    <input type="text" name="name" placeholder='Your full name' required />
                    <input type="email" name="email" placeholder='your email' required />
                    <textarea name="message" cols="30" rows="7" placeholder='Your message ... ' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;