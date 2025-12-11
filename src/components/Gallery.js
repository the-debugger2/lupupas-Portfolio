import React, { useState, useEffect } from "react";
import project4 from "../Assets/Images/Projects/project4.jpg";
import project5 from "../Assets/Images/Projects/project5.jpg";
import project6 from "../Assets/Images/Projects/project6.jpg";
import project7 from "../Assets/Images/Projects/project7.jpg";
import project8 from "../Assets/Images/Projects/project8.jpg";
import project9 from "../Assets/Images/Projects/project9.jpg";
import project12 from "../Assets/Images/Projects/project12.jpg";
import project14 from "../Assets/Images/Projects/project14.jpg";
import project16 from "../Assets/Images/Projects/project16.jpg";
import project18 from "../Assets/Images/Projects/project18.jpg";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Replace these with your actual image imports
  const galleryImages = [
    { id: 4, src: project4, alt: "Project 4" },
    { id: 5, src: project5, alt: "Project 5" },
    { id: 6, src: project6, alt: "Project 6" },
    { id: 7, src: project7, alt: "Project 7" },
    { id: 8, src: project8, alt: "Project 8" },
    { id: 9, src: project9, alt: "Project 9" },
    { id: 12, src: project12, alt: "Project 12" },
    { id: 14, src: project14, alt: "Project 14" },
    { id: 16, src: project16, alt: "Project 16" },
    { id: 18, src: project18, alt: "Project 18" }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, galleryImages.length]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-heading">Gallery</h2>  
      <p className="gallery-description">Here is a showcase of some of the work I have done <br/><span className="white"> click on image to view</span></p>
      
      {/* Carousel Container */}
      <div 
        className="gallery-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Carousel Slide */}
        <div className="gallery-carousel-main">
          <button 
            className="gallery-carousel-btn gallery-carousel-btn-prev" 
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            ‹
          </button>
          
          <div 
            className="gallery-carousel-slide"
            onClick={() => openImageModal(galleryImages[currentIndex])}
          >
            <img 
              src={galleryImages[currentIndex].src} 
              alt={galleryImages[currentIndex].alt}
              className="gallery-carousel-image"
            />
          </div>
          
          <button 
            className="gallery-carousel-btn gallery-carousel-btn-next" 
            onClick={goToNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="gallery-carousel-indicators">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`gallery-carousel-indicator ${index === currentIndex ? 'gallery-carousel-indicator-active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel Thumbnails */}
        <div className="gallery-carousel-thumbnails">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-carousel-thumbnail ${index === currentIndex ? 'gallery-carousel-thumbnail-active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery-carousel-thumbnail-img"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="gallery-modal-overlay" onClick={closeImageModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="gallery-modal-close"
              onClick={closeImageModal}
              aria-label="Close image"
            >
              ×
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="gallery-modal-image"
            />
           
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;