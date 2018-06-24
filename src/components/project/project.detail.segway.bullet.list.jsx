import React from "react";

import "./_project.detail.segway.bullet.list.scss";

const SegwayBulletList = ({
  title,
  itemOne,
  itemTwo,
  itemThree,
  projectBackgroundColor,
  projectColor
}) => (
  <section className="segway" style={{ backgroundColor: `${projectBackgroundColor}` }}>
    <div className="project-detail-bullet-list-container">
      <h4 className="bullet-list-title">{title}</h4>
      <div className="bullet-list-container">
        <div className="item">
          <div className="title" style={{ color: `${projectColor}` }}>1.</div>
          <div className="text">{itemOne}</div>
        </div>
        <div className="item">
          <div className="title" style={{ color: `${projectColor}` }}>2.</div>
          <div className="text">{itemTwo}</div>
        </div>
        <div className="item">
          <div className="title" style={{ color: `${projectColor}` }}>3.</div>
          <div className="text">{itemThree}</div>
        </div>
      </div>
    </div>
  </section>
);

export default SegwayBulletList;
