import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./login.css";
import { Link } from "react-router-dom";
import logoimg from '../navbar/logo.jpg'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      
      if (data.user) {
        alert("login successfull");
        window.location.href = '/projects'
      } else {
        alert("invalid username or password");
      }

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
  // const dispatch = useDispatch();

  // function handleLogin() {
  //   // Make API call to authenticate user and retrieve user data
  //   axios.post('http://localhost:4000/auth/google', { email, password })
  //     .then(response => {
  //       // Update user data in Redux store
  //       dispatch({ type: 'SET_USER', payload: response.data });
  //       // Redirect user to dashboard or other protected route
  //       history.push('/dashboard');
  //     })
  //     .catch(error => {
  //       // Handle error
  //     });
  // }
  
  const login  = ()=> {
    window.open('http://localhost:4000/auth/google')
  }

  return (
    <div className="login gradient">
      <div className="containerLogin gradient">
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
          <h2 className="login-title">Log In to Your Account</h2>
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
          <div>

          <button type="submit" className="buttonStyle">
            Log In
          </button>
          </div>
        </form>
        <button class="google-btn" onClick={login}>
  <img style={{marginRight:'10px'}} src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
  Sign in with Google
</button>

         
      </div>
    </div>
  );
}

export default Login;
