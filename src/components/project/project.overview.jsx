import React from 'react';
import { string, bool } from 'prop-types';
import { navigateTo } from 'gatsby-link';
import { ParallaxLayer } from 'react-spring';
import styled, { keyframes, css } from 'react-emotion';

import './_project.overview.scss';

const ProjectOverview = ({
  goofy,
  title,
  vertical,
  text,
  image,
  offset = 0
}) => (
  <section id={title.replace(' ', '_')}>
    <div className={`project-overview-container ${goofy ? 'goofy' : ''}`}>
      <ParallaxLayer offset={offset * 1.1} speed={0.55}>
          <div className="image" style={{backgroundImage: `url(${image})`}}></div>
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={0.4}>
        <div className="vertical">
          <div>{vertical}</div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={0.5}>
        <h1
          className={`title ${title === 'Allergies' ? 'allergies-title' : ''}`}
          onClick={ () => navigateTo(`/${title.replace(' ', '_').toLowerCase()}`)}
        >
            {title}
        </h1>
        <div className="line"></div>
        <div className="text">{text}</div>
      </ParallaxLayer>
    </div>
  </section>
);

export default ProjectOverview;
