import React from "react";

import "./_project.detail.ui.specs.scss";

const UISpecs = ({
  projectKey,
  docName,
  text
}) => (
  <div className="ui-specs-container">
    <div className={`ui-specs ${projectKey}`}
      onClick={ () => window.open(`/docs/${docName}.pdf`, "_blank")}
    >
      <div className="ui-specs-text">
        {text ? text : "View UI Spec Here"}
      </div>
    </div>
  </div>
);

export default UISpecs;
