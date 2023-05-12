import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-container">
        <div className="pricing-card">
          <h3>Basic Plan</h3>
          <p className="price">$0<span>/mo</span></p>
          <ul>
            <li>Access to basic tasks</li>
            <li>Standard support</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className="pricing-card">
          <h3>Premium Plan</h3>
          <p className="price">$29<span>/mo</span></p>
          <ul>
            <li>Access to all tasks</li>
            <li>Priority support</li>
            <li>Featured listings</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
