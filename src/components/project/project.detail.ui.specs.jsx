import React from "react";

import "./_project.detail.ui.specs.scss";

// import TheWait from "../../docs/the_wait_uispec.pdf";
// import Astraia from "../../docs/astraia_uispec.pdf";
// import Allergies from "../../docs/allergies_uispec.pdf";

const UISpecs = ({
  projectColor,
  projectKey
}) => (
  <div className="ui-specs-container">
    <div className="ui-specs"
      style={{ color: `${projectColor}`, border: `1px solid ${projectColor}`}}
      onClick={ () => window.open(`docs/${projectKey}_uispec.pdf`, "_blank")}
    >
      <div className="ui-specs-text">
        View UI Spec Here
      </div>
    </div>
  </div>
);

export default UISpecs;
