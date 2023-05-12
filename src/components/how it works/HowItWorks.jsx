import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <div className="how-it-works">
      <h2>Yeh Kaise Kaam Karta Hai ?</h2>

      <div className="steps-container">
        <div className="step">
          <div className="step-icon">*</div>
          <h3>Task Dhundho</h3>
          <p>
            Apne area mein aise kaam dhoondiye jo aapke skills aur pasand ke
            anusaar ho.
          </p>
        </div>
        <div className="step">
          <div className="step-icon">*</div>
          <h3>Freelancer/Worker Hire Karo</h3>
          <p>
            Yogya freelancer/worker ki list se chunav kijiye aur kaam ke liye sabse
            accha vyakti hire kijiye.
          </p>
        </div>
        <div className="step">
          <div className="step-icon">*</div>
          <h3>Kaam Pura Karo</h3>

          <p>
            Platform ke through surakshit tarike se task ko poora karne aur
            Payment karne ke liye miljul kar kaam kijiye.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
