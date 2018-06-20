import React from 'react';

import './_hero.scss';

const Hero = () =>
  (<section>
    <div className="hero-container">
      <h1>
        Hi, I’m Whitney. A humanist, designer, and researcher driven by resiliency.
      </h1>
      <div className="scrolldown-container">
        <span>Scroll Down</span>
        <div className="scrolldown"></div>
      </div>
    </div>
  </section>);

export default Hero;
