import React from "react";

import "./_project.detail.segway.quote.scss";

const SegwayQuote = ({
  quote,
  projectBackgroundColor,
  projectColor
}) => (
  <section className="segway">
    <div className="quote-container" style={{ background: `${projectBackgroundColor}`}}>
      <div className="quote" style={{ color: `${projectColor}`}}>
        {quote}
      </div>
    </div>
  </section>
);

export default SegwayQuote;
