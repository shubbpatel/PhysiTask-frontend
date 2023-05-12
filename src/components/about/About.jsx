import React from 'react';
import style from './about.css';
import Navbar from '../navbar/Navbar';

export default function About({ user }) {
  return (
    <div className='aboutUs'>
        <div>
      <Navbar user={user} />

        </div>
      <div className='aboutContainer'>
        <h1 className='title'>PhysiTask</h1>
        <div className='aboutContent'>
          <p>
          PhysiTask ko discover karo, ek innovative freelance app jo specifically aapke non-digital task requirements ke liye 10km radius mein tailor ki gayi hai. Ye state-of-the-art platform effortlessly proficient workers aur employers ko diverse range ke tasks ke liye connect karta hai, jaise home maintenance, cleaning services, gardening, aur personal assistance. PhysiTask mein ek sophisticated filtering system hai, jo users ko easily unke projects ke liye sabse competent aur fitting candidates ko identify karne mein help karti hai. PhysiTask ka distinguishing factor hai iski rigorous background verification process, jo dono parties ke liye maximum safety aur reliability provide karti hai. PhysiTask ke saath, ab aap effortlessly apne aas-paas ke trustworthy, skilled individuals ko access kar sakte hain, aur local freelancers ko bhi apni talents display karne aur income earn karne ka mauka dete hain. Traditional hiring methods ke complications ko alvida kaho aur PhysiTask ke convenience aur security ko embrace karo.
          </p>
          <br />
          {/* <p>
            Discover PhysiTask, the innovative freelance app tailored
            specifically for all your non-digital task requirements within a
            10km radius. This state-of-the-art platform effortlessly connects
            proficient workers and employers for a diverse range of tasks,
            including home maintenance, cleaning services, gardening, and
            personal assistance. PhysiTask features a sophisticated filtering
            system, allowing users to easily identify the most competent and
            fitting candidates for their projects. The distinguishing factor
            for PhysiTask is its rigorous background verification process,
            providing maximum safety and reliability for both parties involved.
            With PhysiTask, you can now effortlessly access trustworthy, skilled
            individuals in your vicinity, while also giving local freelancers
            an opportunity to display their talents and earn an income. Bid
            farewell to the complications of conventional hiring methods and
            embrace the convenience and security that PhysiTask delivers.
          </p> */}
        </div>
      </div>
    </div>
  );
}
