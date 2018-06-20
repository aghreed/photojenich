import React from 'react';
import { bool } from 'prop-types';
import classnames from 'classnames';

import './_header.scss';

const Header = ({ flush }) =>
  (<header className={classnames('header', { flush })}>
    <div className="header-content">
      <div className="active">Work</div>
      <div>About</div>
    </div>
  </header>);

Header.propTypes = {
  flush: bool
};

export default Header;
