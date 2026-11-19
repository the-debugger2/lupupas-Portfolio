import React from "react";
import heroImage from "../Assets/Images/Projects/project3.jpg"; // import the image

const Hero = () => {
  return (
    <div className="hero-container">
      <section id="hero" className="hero-section">
        <h1 className="hero-text">
          Beyond the pixels and pixels, my true passion lies in bridging Art and
          Technology. I believe that every project is an opportunity to make a
          meaningful impact, to inspire, to provoke thought, and to evoke emotion
        </h1>
        <img className="my-image" src={heroImage} alt="lupupa mubanga" />
      </section>
    </div>
  );
};

export default Hero;
