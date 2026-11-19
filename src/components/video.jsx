import React, { useState } from "react";

const getVideoId = (url) => {
  const match = url.match(/embed\/([^?&/]+)/);
  return match ? match[1] : "";
};

const Video = ({
  videoUrl = "https://www.youtube.com/embed/irdxqu1fEso?si=k1Pu8khwxMsr7OaQ",
  title = "YouTube video player",
}) => {
  const [playing, setPlaying] = useState(false);
  const videoId = getVideoId(videoUrl);

  return (
    <section id="video" className="video-section">
      <div className="video-container">
        <h2 className="video-heading">Video</h2>
        <p className="video-text">
          Home Sweet Home is a short film that explores the rich culture Zambia has to offer
        </p>
        <div className="video-frame-wrapper">
          {playing ? (
            <iframe
              className="video-frame"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="video-facade"
              onClick={() => setPlaying(true)}
              aria-label={`Play video: ${title}`}
            >
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt=""
                className="video-facade-img"
                loading="lazy"
                decoding="async"
              />
              <span className="video-facade-play" aria-hidden="true">
                ▶
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;