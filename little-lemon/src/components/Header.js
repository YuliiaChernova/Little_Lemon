import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Dialog from './Dialog';

import nav_logo from '../assets/nav_logo.png';

const Header = () => {
  const menuItems = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'About',
      url: '/about'
    },
    {
      name: 'Booking',
      url: '/booking'
    }
  ];
  const menuBtns = menuItems.map(i => <Link to={i.url}>{i.name}</Link>)
  return (
    <nav className='headerFooterContainer'>
      <Link to='/'>
        <img src={nav_logo} alt='Little Lemon Logo' />
      </Link>
      <div className='menu'>
        <Dialog items={menuBtns} children={<FontAwesomeIcon icon={faBars} size="3x" />}/>
      </div>
    </nav>
  )
}

export default Header;