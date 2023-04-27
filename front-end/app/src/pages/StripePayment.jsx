import React, { useState } from 'react';
import Stripe from 'stripe';

const stripe = new Stripe('PUBLISHABLE_KEY_HERE');

const CheckoutPage = () => {
  // Initialize state for form inputs
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCvc] = useState('');

  // Initialize state for errors and success messages
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a payment intent with the amount and currency
    const { clientSecret } = await stripe.paymentIntents.create({
      amount: 1000, // Example amount in cents
      currency: 'usd',
    });

    // Confirm the card payment using the client secret
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: {
          number: cardNumber,
          exp_month: expDate.substr(0, 2),
          exp_year: expDate.substr(3, 4),
          cvc: cvc,
        },
      },
    });

    if (result.error) {
      setErrorMessage(result.error.message);
      setSuccessMessage(null);
    } else if (result.paymentIntent.status === 'succeeded') {
      setSuccessMessage('Payment successful!');
      setErrorMessage(null);
    }
  };

  // Handle switching to PayPal
  const handleSwitchToPayPal = () => {
    // Implement PayPal switch logic here
  };

  // Format expiration date input
  const handleExpDateChange = (event) => {
    const { value } = event.target;
    const formattedValue = value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d{0,4})/, '$1/$2')
      .substr(0, 7);
    setExpDate(formattedValue);
  };

  return (
    <div className='strip-payment'>
      <h2>Checkout Page</h2>
      <button onClick={handleSwitchToPayPal}>Pay with PayPal</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value.replace(/\D+/g, ''))}
            maxLength={12}
            placeholder="Enter card number"
          />
        </div>
        <div>
          <label htmlFor="expDate">Expiration Date (MM/YYYY):</label>
          <input
            type="text"
            id="expDate"
            value={expDate}
            onChange={handleExpDateChange}
            maxLength={7}
            placeholder="MM/YYYY"
          />
        </div>
        <div>
          <label htmlFor="cvc">CVC:</label>
          <input
            type="text"
            id="cvc"
            value={cvc}
            onChange={(event) => setCvc(event.target.value.replace(/\D+/g, '').substr(0, 3))}
            maxLength={3}
            placeholder="Enter CVC"
          />
        </div>
        <button type="submit">Pay with Card</button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
};

export default CheckoutPage;
