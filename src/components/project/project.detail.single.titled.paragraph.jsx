import React from "react";

import "./_project.detail.single.titled.paragraph.scss";

const SingleTitledParagraph = ({
  title,
  text
}) => (
  <section className="single-titled-paragraph-section">
    <div className="single-titled-paragraph-container">
      <div className="article-container">
        <h4>{title}</h4>
        <p className="text">
          {text}
        </p>
      </div>
    </div>
  </section>
);

export default SingleTitledParagraph;
