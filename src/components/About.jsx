import React from "react";
import image2 from '../Assets/Images/Projects/project2.jpg';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container">
      <section id="about" className="about-section">
        <h2 className="about-heading">About</h2>
        <div className="about-content">
          <div className="about-text-content">
            <h3>
              Hi, I'm <span className="highlight">Lupupa Mubanga</span>
            </h3>
            <p>
              Whether you're seeking a creative partner to elevate your brand, a visionary to breathe life into your ideas, or simply a fellow dreamer to 
              embark on a journey of creativity and exploration, I invite you to dive into my portfolio and discover the possibilities.
            </p>
          </div>
          <div className="image-container">
            <motion.img
              src={image2}
              alt="My work"
              className="about-image"
              initial={{ opacity: 0, y: 50 }}          // start hidden & slightly down
              whileInView={{ opacity: 1, y: 0 }}       // fade in & move up when visible
              transition={{ duration: 1, ease: "easeOut" }} // smooth transition
              viewport={{ once: true, amount: 0.7 }}   // trigger only once, when 50% visible
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
