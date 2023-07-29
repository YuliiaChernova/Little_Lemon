import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="heroContainer">
      <h1>Little Lemon</h1>
      <p>Chicago</p>
      <Link to='/booking'>
        <button className="secondaryButton">Book table</button>
      </Link>
    </div>
  )
};

export default Hero;