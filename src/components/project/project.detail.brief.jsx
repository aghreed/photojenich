import React from "react";
import "./_project.detail.brief.scss";

const ProjectDetailBrief = ({
  text,
  text2
}) => (
  <section className="in-brief-section">
    <div className="in-brief-container">
      <span className="title">In Brief</span>
      <span className="horizontal-line"></span>
      <p className="text">
        {text}
       </p>
       {
         text2 &&
         <p className="text">
          {text2}
         </p>
       }
    </div>
  </section>
);

export default ProjectDetailBrief;
