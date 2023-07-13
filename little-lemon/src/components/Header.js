import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import nav_logo from '../assets/nav_logo.png';

const Header = () => {
  return (
    <nav className="headerFooterContainer">
      <div>
        <img src={nav_logo} alt="Little Lemon Logo" />
      </div>
      <div className="menu">
        <FontAwesomeIcon icon={faBars} size="3x" />
      </div>
    </nav>
  )
}

export default Header;