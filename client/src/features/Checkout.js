import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Checkout = ({ amount, onToken }) => {
  const [product] = useState({
    name: 'My Product',
    price: amount,
  });

  const handleToken = (token) => {
    onToken(token); // Pass the token to the parent component (in this case, the App component)
  };

  return (
    <StripeCheckout
      name={product.name}
      description={`Your total is $${product.price}`}
      amount={product.price * 100} // Stripe requires the price in cents
      token={handleToken}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button>Checkout</button>
    </StripeCheckout>
  );
};

export default Checkout;