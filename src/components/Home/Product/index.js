import { Button } from '@material-ui/core';
import React from 'react';
import './index.scss';

const Product = ({ title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="info">
        <p>{title}</p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
