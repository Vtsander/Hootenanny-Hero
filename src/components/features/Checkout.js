import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';



const MyComponent = () => {
  const [amount, setAmount] = useState(0);

  

  const handleToken = (token) => {
    // Handle the token received from Stripe
  };

  return (
    <div>
      <StripeCheckout
  name="My Product"
  description={`Your total is $${amount}`}
  amount={amount * 100} // Stripe requires the price in cents
  token={handleToken}
  stripeKey='pk_test_51MgcUNKLzZz5BbzT4DyG9Ywg9zZ6bANbHQG6Snw6h50woZBAgtwTu7bm9cVCgSXVAjuVJ1pGFvlG1vy9ZW2ER8vb00MdSsTlB8'

  onToken={(token) => handleToken(token)}
>
  <button onClick={() => setAmount(10)}>Checkout</button>
</StripeCheckout>



    </div>
  );
};

export default MyComponent;