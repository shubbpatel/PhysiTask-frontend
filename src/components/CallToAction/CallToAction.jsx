import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

function CallToAction() {
  return (
    <div className="cta">
      <h2>Ready to Get Started?</h2>
      <p>Join PhysiTask now and start exploring available tasks in your area!</p>
      <div className="cta-buttons">
        <Link to="/signup" className="cta-btn">
          Sign Up
        </Link>
        <Link to="/projects" className="cta-btn">
          Explore Tasks
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;
