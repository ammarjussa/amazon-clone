import React from 'react';
import './index.scss';
import { useStateValue } from '../../Providers/StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import FlipMove from 'react-flip-move';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="container">
        <h1>Checkout ({<Link to="/checkout">{basket?.length} items</Link>})</h1>
        <div className="section">
          <div className="title">
            <h3>Delivery Address</h3>
          </div>
          <div className="address">
            <p>{user?.email}</p>
            <p>A-25 Block C</p>
            <p>FB Area Karachi</p>
          </div>
        </div>
        <div className="section">
          <div className="title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="items">
            {basket?.map((item) => (
              <FlipMove typeName={null} duration={500} delay={0}>
                <CheckoutProduct key={item.id} {...item} />
              </FlipMove>
            ))}
          </div>
        </div>
        <div className="section">
          <div className="title">
            <h3>Payment Methods</h3>
          </div>
          <div className="details"></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
