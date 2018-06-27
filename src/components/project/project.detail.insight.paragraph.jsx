import React from "react";

import "./_project.detail.insight.paragraph.scss";

const InsightParagraph = ({
  title,
  forward,
  text,
  text2
}) => (
  <section className="insight-paragraph-section">
    <div className="insight-paragraph-container">
      <div className="insight-description">
        <div className="insight-title">{title}</div>
        <div className="forward">{forward}</div>
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
    </div>
  </section>
);

export default InsightParagraph;
