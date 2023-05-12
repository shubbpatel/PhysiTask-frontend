import React, { useState } from "react";
import style from './signup.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import logoimg from '../components/navbar/logo.jpg'


function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:4000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="signup gradient">
      <div className="containerSignup gradient">
      <Link to="/" className="navbar-logo">
          {/* PhysiTask */}
          <img
            src={logoimg}
            alt="PhysiTask"
            style={{
              width: "150px",
              height: "auto",
              padding: "0px",
              margin: "0px",
              borderRadius:'5px',
              marginBottom:'1rem'
            }}
          />
        </Link>
        <form onSubmit={handleSubmit}>
          <h2 className="signup-title">Create Your Account</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="buttonStyle bHover">
           <b>Create Account</b> 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
