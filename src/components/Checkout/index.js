import React from 'react';
import './index.scss';
import SubTotal from './SubTotal';

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="left">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" />
        <h2>Your Shopping Basket</h2>
      </div>
      <div className="right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
