import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className="features">
      <h2>Key Features</h2>
      <div className="features-container">
        <div className="feature">
          <div className="feature-icon-container">
            <i className="fas fa-search feature-icon"></i>
          </div>
          <h3>Advanced Filtering</h3>
          <p>Our sophisticated filtering system helps you easily identify the most competent and fitting candidates for your projects.</p>
        </div>
        <div className="feature">
          <div className="feature-icon-container">
            <i className="fas fa-shield-alt feature-icon"></i>
          </div>
          <h3>Background Verification</h3>
          <p>Our rigorous background verification process ensures maximum safety and reliability for both parties.</p>
        </div>
        <div className="feature">
          <div className="feature-icon-container">
            <i className="fas fa-tasks feature-icon"></i>
          </div>
          <h3>Diverse Range of Tasks</h3>
          <p>Find tasks in various categories, such as home maintenance, cleaning services, gardening, and personal assistance.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
