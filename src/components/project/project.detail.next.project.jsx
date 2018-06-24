import React from "react";
import { navigateTo } from "gatsby-link";

import "./_project.detail.next.project.scss";

const NextProject = ({
  projectKey
}) => (
  <div className="next-project-container">
    <div className="next-project"
      style={{ color: `#0D1017`, border: `1px solid #0D1017`}}
      onClick={() => {
        console.log("hey I got clicked!", projectKey);
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
