import React from "react";

import "./_project.detail.reflections.scss";

const ProjectReflections = ({
  projectColor,
  title,
  text,
  text2,
  text3,
  secondTitle,
  secondText,
  secondText2
}) => (
  <section className="reflections-section">
    <div className="spacer-container">
      <div className="spacer" style={{ background: `${projectColor}`}}></div>
    </div>
    <div className="reflections-container">
      <span className="reflections-title" style={{ color: `${projectColor}`}}>Reflections</span>
      <span className="horizontal-line"></span>
      <div className="article-container">
        <h4 className="title">{title}</h4>
        <p className="text">
          {text}
        </p>
        {
          text2 &&
          <p className="text">
            {text2}
          </p>
        }
        {
          text3 &&
          <p className="text">
            {text3}
          </p>
        }
        {
          secondTitle &&
          <h4 className="title">{secondTitle}</h4>
        }
        {
          secondText &&
          <p className="text">
            {secondText}
          </p>
        }
        {
          secondText2 &&
          <p className="text">
            {secondText2}
          </p>
        }
      </div>
    </div>
  </section>
);

export default ProjectReflections;
