import React from 'react';
import about_image from '../assets/about.jpg';

const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='aboutTextContainer'>
        <h2>Little Lemon</h2>
        <p>Text about Little lemon restaurant from Client. More text and some more text. And again text.</p>
      </div>
      <img src={about_image} alt='About Little Lemon'/>
    </div>
  )
};

export default About;