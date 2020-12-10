const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request } = require('express');

const stripe = require('stripe')(
  'sk_test_51HsQDhBfjYOY3P1kJIUEd2kGBqxkuDApOfaCESUGuXUdKyVi43ufKk0vNvQMG2vwYREEhjyNCd4Ub9D1N0uB8FH500hkbryDCI'
);

const app = express();

app.use(cors);

app.use(express.json());

app.post('/payments/create', async (req, res) => {
  console.log(req);
  const total = req.query.total;

  console.log('Payment Request Received BOOM', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
