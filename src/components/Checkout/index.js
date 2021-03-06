import React from 'react';
import { useStateValue } from '../../Providers/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './index.scss';
import SubTotal from './SubTotal';
import FlipMove from 'react-flip-move';

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="left">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" />
        <h2>My Shopping Basket</h2>
        {basket?.map((item) => (
          <FlipMove typeName={null} duration={500} delay={0}>
            <CheckoutProduct key={item.id} {...item} />
          </FlipMove>
        ))}
      </div>
      <div className="right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
