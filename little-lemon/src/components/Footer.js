import React from 'react';
import footer_logo from '../assets/footer_logo.png';

const Footer = () => {
  return (
    <footer className='headerFooterContainer'>
      <img src={footer_logo} alt='Little Lemon Logo' />
      <div>
        <h3>Navigation</h3>
        <p>Menu</p>
        <p>Book table</p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>Contacts</p>
        <p>Map</p>
      </div>
      <div>
        <h3>Social media</h3>
        <p>Instagram</p>
        <p>Facebook</p>
      </div>
    </footer>
  )
};

export default Footer;