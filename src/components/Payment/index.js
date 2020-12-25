import React, { useState, useEffect } from 'react';
import './index.scss';
import { useStateValue } from '../../Providers/StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import FlipMove from 'react-flip-move';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../Reducers/getBasketTotal';
import axios from '../../axios';
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

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
          <div className="details">
            <div className="price_container">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </div>
            <StripeCheckout
              token={(token) => {
                history.push('/');
                dispatch({
                  type: 'CLEAR_BASKET',
                });
              }}
              stripeKey="pk_test_51HsQDhBfjYOY3P1kIWikOScCJSyBjW6wBXnzIDSLdNNdMoMcqgIYUTtnRpFfmW9CRhTtbkojJcX6Bxz557PqH0sa0091MF4w5i"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
