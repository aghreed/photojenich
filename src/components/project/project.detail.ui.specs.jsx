import React from "react";

import "./_project.detail.ui.specs.scss";

const UISpecs = ({
  projectColor,
  docName,
  text
}) => (
  <div className="ui-specs-container">
    <div className="ui-specs"
      style={{ color: `${projectColor}`, border: `1px solid ${projectColor}`}}
      onClick={ () => window.open(`/docs/${docName}.pdf`, "_blank")}
    >
      <div className="ui-specs-text">
        {text ? text : "View UI Spec Here"}
      </div>
    </div>
  </div>
);

export default UISpecs;
