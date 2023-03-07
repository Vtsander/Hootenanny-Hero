import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import DoughnutChart from './DoughnutChart';

const MyComponent = () => {
  const [amount, setAmount] = useState(0);

  const handleToken = (token) => {
    // Handle the token received from Stripe
  };

  return (
    <div>
      <DoughnutChart />
      <StripeCheckout
        name="My Product"
        description={`Your total is $${amount}`}
        amount={amount * 100} // Stripe requires the price in cents
        token={handleToken}
        stripeKey={process.env.API_KEY}
        onToken={(token) => handleToken(token)}
      >
        <button onClick={() => setAmount(10)}>Checkout</button>
      </StripeCheckout>
    </div>
  );
};

export default MyComponent;