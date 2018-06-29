import React from 'react';

import './_hero.scss';

const Hero = ({
  hideHero,
  hideScrollDown
}) =>
  (<section>
    <div className="hero-container">
      <h1 className={`hero-title ${hideHero ? 'hidden' : ''}`}>
        Hi, I’m Whitney. A humanist, designer, and researcher driven by resiliency.
      </h1>
      <div className={`scrolldown-container ${hideScrollDown ? 'hidden' : ''}`}>
        <span>Scroll Down</span>
        <div className="scrolldown"></div>
      </div>
    </div>
  </section>);

export default Hero;
