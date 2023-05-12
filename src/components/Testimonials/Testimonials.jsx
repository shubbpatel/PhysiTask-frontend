import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <img src="https://via.placeholder.com/100" alt="User 1" />
          <h3>Jane Doe</h3>
          <p>
            "PhysiTask helped me find skilled professionals for my home
            improvement projects. It was easy to use and provided a great
            selection of local freelancers!"
          </p>
        </div>
        <div className="testimonial">
          <img src="https://via.placeholder.com/100" alt="User 2" />
          <h3>John Smith</h3>
          <p>
            "As a freelancer, PhysiTask has been an excellent platform for me to
            find local work opportunities and showcase my skills. Highly
            recommended!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
