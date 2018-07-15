import React from "react";

import "./_project.detail.bullet.list.image.scss";

const BulletListImage = ({
  goofy,
  image,
  title,
  text,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,

}) => (
  <section className="bullet-list-image-section">
    <div className={`bullet-list-image-container ${goofy ? 'goofy' : ''}`}>
      {
        !goofy &&
         <div className="image" style={{backgroundImage: `url(${image})`}}></div>
      }
      <div className="description">
        {
          title &&
          <h4 className="title">{title}</h4>
        }
        <div className="bullet-list">
          <p className="text">
          {text}
          </p>
          <p className="text">
          {text2}
          </p>
          <p className="text">
          {text3}
          </p>
          {
            text4 &&
            <p className="text">
              {text4}
            </p>
          }
          {
            text5 &&
            <p className="text">
              {text5}
            </p>
          }
          {
            text6 &&
            <p className="text">
              {text6}
            </p>
          }
          {
            text7 &&
            <p className="text">
              {text7}
            </p>
          }
          {
            text8 &&
            <p className="text">
              {text8}
            </p>
          }
        </div>
      </div>
      {
        goofy &&
        <div className="image" style={{backgroundImage: `url(${image})`}}></div>
      }
    </div>
  </section>
);

export default BulletListImage;
