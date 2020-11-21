import { Button } from '@material-ui/core';
import React from 'react';
import './index.scss';

const Product = () => {
  return (
    <div className="product">
      <div className="info">
        <p>The lean startup</p>
        <p className="price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
