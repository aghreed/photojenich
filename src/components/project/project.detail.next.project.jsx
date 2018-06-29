import React from "react";
import { navigateTo } from "gatsby-link";

import "./_project.detail.next.project.scss";

const NextProject = ({
  projectKey
}) => (
  <div className="next-project-container">
    <div className="next-project"
      onClick={() => {
        navigateTo(`/${projectKey}`);
      }}
    >
      <div className="next-project-text">
        Go to Next Project
      </div>
    </div>
  </div>
);

export default NextProject;
