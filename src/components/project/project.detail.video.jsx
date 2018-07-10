import React from "react";

import "./_project.detail.video.scss";

const VideoSection = ({
  videoSrc,
}) => (
  <section className="video-section">
    <div className="video-container">
      <iframe width="100%" height="100%" src={`${videoSrc}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  </section>
);

export default VideoSection;
