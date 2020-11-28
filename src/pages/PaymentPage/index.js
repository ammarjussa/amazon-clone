import React from 'react';
import Header from '../../components/Header';
import Payment from '../../components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HsQDhBfjYOY3P1kIWikOScCJSyBjW6wBXnzIDSLdNNdMoMcqgIYUTtnRpFfmW9CRhTtbkojJcX6Bxz557PqH0sa0091MF4w5i'
);

const PaymentPage = () => {
  return (
    <div>
      <Header />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </div>
  );
};

export default PaymentPage;
