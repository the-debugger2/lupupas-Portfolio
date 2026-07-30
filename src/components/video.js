import React from 'react';

const Video = ({
  videoUrl = 'https://www.youtube.com/embed/irdxqu1fEso?si=k1Pu8khwxMsr7OaQ',
  title = 'YouTube video player',
}) => {
  return (
    <section id="video" className="video-section">
      <div className="video-container">
        <h2 className="video-heading">Video</h2>
        <p className="video-text">
          Home Sweet Home is a short film that explores the rich culture Zambia has to offer
        </p>
        <div className="video-frame-wrapper">
          <iframe
            className="video-frame"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Video;