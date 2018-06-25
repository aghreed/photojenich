import React from "react";

import "./_project.detail.paragraph.image.scss";

const ParagraphImage = ({
  image,
  title,
  text,
  text2
}) => (
  <section className="paragraph-image-section">
    <div className="paragraph-image-container">
      <div className="description">
        <h4 className="title">{title}</h4>
        <p className="text">
          {text}
        </p>
        {
          text2 &&
          <p className="text">
            {text}
          </p>
        }
      </div>
      <div className="image" style={{backgroundImage: `url(${image})`}}></div>
    </div>
  </section>
);

export default ParagraphImage;
