import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <div className="how-it-works">
      <h2>Yeh Kaise Kaam Karta Hai ?</h2>

      <div className="steps-container">
        <div className="step">
          <div className="step-icon">1</div>
          <h3>Task Dhundho</h3>
          <p>
            Apne area mein aise kaam dhoondiye jo aapke skills aur pasand ke
            anusaar ho.
          </p>
        </div>
        <div className="step">
          <div className="step-icon">2</div>
          <h3>Freelancer Hire Karo</h3>
          <p>
            Yogya freelancers ki list se chunav kijiye aur kaam ke liye sabse
            accha vyakti hire kijiye.
          </p>
        </div>
        <div className="step">
          <div className="step-icon">3</div>
          <h3>Kaam Pura Karo</h3>

          <p>
            Platform ke through surakshit tarike se task ko poora karne aur
            bhugtan karne ke liye miljul kar kaam kijiye.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
