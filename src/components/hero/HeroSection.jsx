import React from 'react';
import './hero.css';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HowItWorks from '../how it works/HowItWorks';
import Features from '../Features/Features';
import Testimonials from '../Testimonials/Testimonials';
import Pricing from '../pricing/Pricing';
import FAQ from '../FAQ/FAQ';
import CallToAction from '../CallToAction/CallToAction';

function HeroSection({user}) {
  return (
    <div>
        <div className="hero-section">
    <div className='navbarr'>
      <Navbar user={user}/>

      </div>
      <div className="hero-text">
        <h1> PhysiTask</h1>
        <p>10km radius ke andar non-digital kaamo ke liye local professionals se judne ka sabse Badhiya platform</p>


<div className="hero-buttons">
          <Link to={user? `/profile`:'/login'}>
          <button className="get-started-btn">Get Started</button>
          </Link>
          <Link to='/projects'>
          <button className="find-task-btn">Find a Task</button>
          </Link>
        </div>
      </div>
    </div>
    <HowItWorks/>
    <Features/>
    {/* <Testimonials/> */}
    {/* <Pricing/> */}
    <FAQ/>
    {!user? <CallToAction/>:''}
      <Footer/>
    </div>
  );
}

export default HeroSection;
