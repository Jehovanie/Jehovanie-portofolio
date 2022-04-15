import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About'
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Service from './components/services/Services';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Service />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;