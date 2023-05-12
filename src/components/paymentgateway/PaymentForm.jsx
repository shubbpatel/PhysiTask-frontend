import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { payForProject } from '../services/payments';
import style from './payment.css';

const PaymentForm = ({ projectId, amount }) => {
//   const history = //useHistory();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payment = { projectId, amount, cardNumber, expiryDate, cvv, name };
//     // const success = await // payForProject(payment);
//    if (success) {
//     //   history.push('/projects');
//     } else {
//       alert('Payment failed. Please try again.');
//     }
//   };

  return (
    <div className="payment-form-container">
      <h1>Make a Payment</h1>
      <form onSubmit='' className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name on Card:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Pay ${amount}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
