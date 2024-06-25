// src/components/Card.js
import React from 'react';

const Card = ({ imageUrl, title }) => (
  <div className="card">
    <img src={imageUrl} alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

export default Card;
