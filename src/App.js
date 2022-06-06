import React from 'react';
import OtherHead from './components/otherHeader/OtherHead';
import About from './components/about/About'
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Service from './components/services/Services';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Project from './components/project/Project';

const App = () => {
    return (
        <div className='app'>
            <OtherHead />
            {/* <Header /> */}
            <Nav />
            <About />
            <Experience />
            <Service />
            <Project />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </div>
    );
};

export default App;