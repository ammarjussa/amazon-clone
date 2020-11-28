import React, { useState, useEffect } from 'react';
import './index.scss';
import { useStateValue } from '../../Providers/StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import FlipMove from 'react-flip-move';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../Reducers/getBasketTotal';
import axios from '../../axios';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(null);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${5000}`,
      });

      console.log(response);

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log('The secret is ' + clientSecret);

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace('/orders');
      });
  };

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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="price_container">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
