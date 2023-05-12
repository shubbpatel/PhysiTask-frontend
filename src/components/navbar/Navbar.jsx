import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navbar from "./navbar.css";
import { img } from "../images/export";
import axios from "axios";
import { useLocation } from "react-router-dom";
import logoimg from "./logo.jpg";

function Navbar({ user }) {
  const [LoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // const history = unstable_HistoryRouter();
  const logout = async () => {
    try {
      await axios.post("http://localhost:4000/logout");
      // history.push("/login");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
  }, [user]);

  



  return (
    <nav className="navbar">
      <div className="container">

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
              borderRadius:'5px'
              
            }}
            />
        </Link>

        
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className="navbar-menu">
          <li>
            <input
              style={{
                background: "none",
                color: "white",
                border: "1px solid white",
                outline: "none",
              }}
              type="text"
            />
          </li>
          <li className="navbar-item">
            <Link to="/projectsubmission" className="navbar-link">
              Hire
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="navbar-link">
              Find Task
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About Us
            </Link>
          </li>

          {!LoggedIn ? (
            <>
              <li className="navbar-item">
                <Link to="/login" className="navbar-link">
                  Log In
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/signup" className="navbar-link">
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link
                  to="http://localhost:4000/logout"
                  className="navbar-link"
                  onClick={logout} style={{background:'red', color:'white', fontSize:'10px'}}
                >
                  Log out
                </Link>
              </li>
              {/* <li>
              <h4 style={{cursor:'pointer',color:'white'}} onClick={()=> {
            window.location ='/profile'
          }}>{user.displayName}</h4> 
              </li> */}
              <li
                style={{ cursor: "pointer" }}
                className="navbar-item"
                onClick={() => {
                  window.location = "/profile";
                }}
              >
                <img
                  src={user.profileImage}
                  // src={console.log(user.profileImage)}
                  alt="user"
                  style={{ borderRadius: "360px", width: "40px" }}
                />
              </li>
              
              <div>
                
                {/* <p>Email: {email}</p> */}
                {/* <p>id: {_id}</p> */}
              </div>
            </>
          )}
        </ul>
        {menuOpen && (
  <div className={`menu-container${menuOpen ? " open" : ""}`}>
      <ul className="navbar-menuu">
          <li>
            <input
              style={{
                background: "none",
                color: "white",
                border: "1px solid white",
                outline: "none",
              }}
              type="text"
            />
          </li>
          <li className="navbar-item">
            <Link to="/projectsubmission" className="navbar-link">
              Hire
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="navbar-link">
              Find Task
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About Us
            </Link>
          </li>

          {!LoggedIn ? (
            <>
              <li className="navbar-item">
                <Link to="/login" className="navbar-link">
                  Log In
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/signup" className="navbar-link">
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link
                  to="http://localhost:4000/logout"
                  className="navbar-link"
                  onClick={logout} style={{background:'red', color:'white', fontSize:'10px'}}
                >
                  Log out
                </Link>
              </li>
              {/* <li>
              <h4 style={{cursor:'pointer',color:'white'}} onClick={()=> {
            window.location ='/profile'
          }}>{user.displayName}</h4> 
              </li> */}
              <li
                style={{ cursor: "pointer" }}
                className="navbar-item"
                onClick={() => {
                  window.location = "/profile";
                }}
              >
                <img
                  src={user.profileImage}
                  // src={console.log(user.profileImage)}
                  alt="user"
                  style={{ borderRadius: "360px", width: "40px" }}
                />
              </li>
              
              <div>
                
                {/* <p>Email: {email}</p> */}
                {/* <p>id: {_id}</p> */}
              </div>
            </>
          )}
        </ul>
  </div>
)}


      </div>
    </nav>
  );
}

export default Navbar;
