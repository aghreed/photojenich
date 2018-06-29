import React from "react";

import "./_project.detail.segway.hero.scss";

const SegwayHero = ({
  title,
  heroText,
  backgroundColor,
  heroTitleColor,
  heroColor
}) => (
  <section className="segway">
    <div className="hero-container" style={{ background: `${backgroundColor}`}}>
      <div className="hero-title" style={{ color: `${heroTitleColor}`}}>{title}</div>
      <div className="bar" style={{ background: `${heroTitleColor}`}}></div>
      <div className="hero" style={{ color: `${heroColor}` }}>
        {heroText}
      </div>
    </div>
  </section>
);

export default SegwayHero;
