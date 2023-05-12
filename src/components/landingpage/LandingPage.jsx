import React from "react";
import style from "./landingpage.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

export default function LandingPage({ user }) {
  if (user) {
    if (document.getElementById("bDiv")) {
      const hide = document.getElementById("bDiv");
      hide.style = "display:none";
    }
  }
  return (
    <div className="frontPage ">
      <div className="landing-page background-image">
          <Navbar user={user} />
        <div className="nav-position">
        </div>

        <div className="landing-page__header ">
          {/* <h1 id="bc">
            काम 25... Hai dekhlo
            <br />
            <Link
              to="/projects"
              style={{ color: "#0e2037", textDecoration: "none" }}
              className="btn btn-primary"
            >
              Find Task
            </Link>{" "}
            <br />
            पे क्लिक करके
          </h1> */}
         
          {user ? (
            <h1
              className="gradient"
              style={{ }}
            >
              Welcome {user.displayName.toUpperCase()}
            </h1>
          ) : (
            <div id="bDiv" className="buttonDiv">
              <button
                className="buttonStyle"
                onClick={() => {
                  window.location = "signup";
                }}
              >
                Sign Up
              </button>
              <button
                style={{ marginLeft: "10px" }}
                className="buttonStyle "
                onClick={() => {
                  window.location = "/login";
                }}
              >
                Log In
              </button>
            </div>
          )}
        </div>
        <div className="landing-page__body">
          {/* <img src="/images/landing-page.png" alt="" /> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
