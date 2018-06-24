import React from "react";

import "./_project.detail.hero.scss";

const ProjectDetailHero = ({
  image,
  title,
  duration,
  role,
  projectColor
}) => (
  <section className="project-section">
    <div className="project-container">
      <div className="project-image" style={{backgroundImage: `url(${image})`}}></div>
      <h1 className="project-title">{title}</h1>
      <div className="project-description" style={{ background: `${projectColor}`}}><span>Duration: {duration}</span> <span style={{ marginLeft: '0.5em'}}>Role: {role}</span></div>
      <div className="scrolldown">
        <div className="scrolldown-text">Scroll Down</div>
        <div className="scrolldown-line"></div>
      </div>
    </div>
  </section>
);

export default ProjectDetailHero;
