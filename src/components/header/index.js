import React from 'react';
import Link from "gatsby-link";

import './_header.scss';

const Header = ({
  location
}) =>
  (<header className="header">
    <div className="header-content">
      <div>
      {
        location.pathname === '/' ?
        <Link to="/astraia">Work</Link> :
        <Link to="/">Home</Link>
      }
      </div>
      <div>
      {
        location.pathname === '/about' ?
        <Link to="/astraia">Work</Link> :
        <Link to="/about">About</Link>
      }
      </div>
    </div>
  </header>);

export default Header;
