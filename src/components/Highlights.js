import React, { useState } from 'react';
import image1 from '../Assets/Images/Projects/project21.jpg';
import image2 from '../Assets/Images/Projects/project22.jpg';
import image3 from '../Assets/Images/Projects/project23.jpg';
import image4 from '../Assets/Images/Projects/project24.jpg';
import image5 from '../Assets/Images/Projects/project25.jpg';

const Highlights = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (img) => setSelectedImage(img);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section className="highlights-section">
      <h2 className="highlights-heading">Highlights</h2>
      <p className="highlights-text">Click to view full image</p>
      <div className="highlights-content">
        <img className="image image1" src={image1} alt="WaterFall" onClick={() => handleClick(image1)} />
        <img className="image image2" src={image2} alt="Poolside" onClick={() => handleClick(image2)} />
        <img className="image image3" src={image3} alt="Butterfly platter" onClick={() => handleClick(image3)} />
        <img className="image image4" src={image4} alt="The Capitol" onClick={() => handleClick(image4)} />
        <img className="image image5" src={image5} alt="Lake" onClick={() => handleClick(image5)} />
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={selectedImage} alt="Full view" />
        </div>
      )}
    </section>
  );
};

export default Highlights;
