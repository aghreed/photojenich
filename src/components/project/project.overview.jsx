import React from 'react';
import { string, bool } from 'prop-types';
import Link from 'gatsby-link';

import './_project.overview.scss';

const ProjectOverview = ({
  goofy, // need to do something with this
  title,
  vertical,
  text,
  image
}) => (
  <section id={title.replace(' ', '_')}>
    <div className={`project-overview-container ${goofy ? 'goofy' : ''}`}>
      <div className="image" style={{backgroundImage: `url(${image})`}}></div>
      <div className="vertical">
        <div><Link to={`/${title.replace(' ', '_').toLowerCase()}`}>{vertical}</Link></div>
      </div>
      <h1 className="title">
          {title}
      </h1>
      <div className="line"></div>
      <div className="text">{text}</div>
    </div>
  </section>
);

ProjectOverview.propTypes = {
  goofy: bool,
  title: string,
  vertical: string,
  text: string,
  image: string
};

export default ProjectOverview;
