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
      <div className="project-title">{title}</div>
      <div className="project-description" style={{ background: `${projectColor}`}}>
        <span style={{ fontWeight: 'bold' }}>Duration: </span>
        <span>{duration}</span>
        <span style={{ marginLeft: '0.5em', fontWeight: 'bold' }}>Role: </span>
        <span>{role}</span>
      </div>
      <div className="scrolldown">
        <div className="scrolldown-text">Scroll Down</div>
        <div className="scrolldown-line"></div>
      </div>
    </div>
  </section>
);

export default ProjectDetailHero;
