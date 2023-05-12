import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Router,
  Link,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import PaymentForm from "./components/paymentgateway/PaymentForm";
import Projects from "./components/projectlistingpage/Projects";
import ProjectSubmission from "./components/projectsubmissionpage/ProjectSubmission";
import Dashboard from "./components/userdashboard/Dashboard";
import UserProfile from "./components/userProfile/UserProfile";
import Signup from "./signup/SignUp";
import ProjectDetails from "./components/project details/ProjectDetails";
import About from "./components/about/About";
import PrivacyPolicy from "./components/privacy policy/PrivacyPolicy";
import TermsOfService from "./components/terms of services/TermsOfService";
import HeroSection from "./components/hero/HeroSection";
import BidderProfile from "./components/Bidders profile/BidderProfile";
import Locss from "./components/projectsubmissionpage/Locss";
// import { reducer} from "./store/store";


// import { Provider } from "react-redux";
// import { createStoreHook } from "react-redux";/

// const store = createStoreHook(reducer);
export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = ()=> {
    axios.get('http://localhost:4000/login/success',{
      withCredentials:true
    }).then(resObj => {
      if(resObj.data){
        const userData =JSON.parse(resObj.data);
        setUser(userData);
}
      
    }).catch(err => {
        console.log(err);
      })
    };
    getUser()
    
  }, []);
  if(user !== null){

    console.log(user);
  }
  

  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HeroSection user={user} />} />

          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/projects" element={<Projects user={user} />} />
          <Route exact path="/about" element={<About user={user} />} />
          <Route exact path="/privacy" element={<PrivacyPolicy/>} />
          <Route exact path="/terms" element={<TermsOfService />} />
          <Route exact path="/projectsubmission" element={<ProjectSubmission user={user} />} />
          <Route path="/bidderProfile/:bidderId" element={<BidderProfile user={user} />} />

          <Route exact path="/paymentgateway" element={<PaymentForm user={user} />} />
          <Route exact path="/profile" element={<UserProfile user={user} />} />
          <Route exact path="/projectdetails/:id" element={<ProjectDetails user={user} />} />
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}
