import React from "react";

import CandyBarGif from "../../images/candybar.gif";

import "./_mobile.modal.scss";

const MobileModal = () => (
  <div className="mobile-modal-container">
    <div className="modal-text">
    <p>
    Cutting your candy bar ruins the experience... so does viewing a website on a phone.
    </p>
    <p>
    To get the full experience, please visit my portfolio on a desktop. Thanks!
    </p>
    </div>
    <div className="modal-image" style={{ backgroundImage: `url(${CandyBarGif})`}}></div>
  </div>
);

export default MobileModal;
