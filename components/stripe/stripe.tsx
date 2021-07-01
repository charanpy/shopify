import React from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import ButtonComponent from '../Button/Button.component';

const stripePromise = loadStripe(
  'pk_test_51HT5nIDKV0ASSP3YmtkvyT5WvT5g4L8i0Hu8XHtj4ZeirCVBAN12SVpg7MWLCLgFxUTsKuhG4jatUduiIdeB0CuT007W1d0e8Y'
);

const StripeButton = ({ price, user }) => {
  const handleChange = async () => {
    const stripe = await stripePromise;
    const {
      data: { session },
    } = await axios.post(`${process.env.URL}/api/payment`, {
      amount: price,
      userId: user._id,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      return;
    }
  };

  return (
    <ButtonComponent handleClick={handleChange}>ORDER NOW</ButtonComponent>
  );
};

export default StripeButton;
