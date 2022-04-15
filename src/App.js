import React from 'react';
import Header from './components/header/Header';
import Nav from './components/Nav/Nav';
import Experience from './components/experience/Experience';
import Service from './components/service/Service';
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