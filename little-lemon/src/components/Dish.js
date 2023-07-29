import React from 'react';

const Dish = ({ url, title, description }) => {
  return (
    <div className="dishContainer">
      <img src={url} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
};

export default Dish;