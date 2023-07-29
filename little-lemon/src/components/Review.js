import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ img, name, review }) => {
  const stars = [faStar, faStar, faStar, faStar, faStar];
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="userContainer">
        <img src={img} alt={name} />
        <div>
          <p>{name}</p>
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      <p>{review}</p>
    </div>
  )
};

export default Review;