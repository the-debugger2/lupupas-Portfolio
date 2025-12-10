import './App.css';
import React from 'react';
import '@fontsource/lobster';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Vision from './components/vision';
import Highlights from './components/Highlights';
import { Element } from 'react-scroll'; // Import Element from react-scroll


function App() {
  return (
    <div className="App">
      <Navbar />
<Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="gallery">
       <Gallery/>
      </Element>
      <Element name="vision">
        <Vision/>
      </Element>
      <Element name="highlights">
        <Highlights/>
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
