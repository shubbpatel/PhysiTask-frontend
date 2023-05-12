import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import backendUrl from "../../config";

const BidderProfile = ({user}) => {
  const [bidder, setBidder] = useState(null);
  const { bidderId } = useParams();
  console.log(bidderId);

  useEffect(() => {
    const fetchBidder = async () => {
      try {
        const response = await axios.get(`${backendUrl}/biddersprofile/${bidderId}`);
        setBidder(response.data);
      } catch (error) {
        console.log("Failed to fetch bidder profile");
      }
    };

    fetchBidder();
  }, [bidderId]);

  if (!bidder) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gradient" style={{minHeight:'100vh'}}>

    <div className="profile-container " >
        <Navbar user={user}/>
    <div className="profile-card">
      <img
        src={bidder.profileImage} // Replace this with the actual profile picture URL
        alt="Profile"
        className="profile-image"
      />
      <div className="profile-info">
        <div className="profile-info-row">
          <span className="profile-label">Full Name:</span>
          <span className="profile-value">
          {bidder.displayName}       
             </span>
        </div>
       
        <div className="profile-info-row">
          <span className="profile-label">E-mail:</span>
          <span className="profile-value">
          {bidder.email}       
          </span>
        </div>
        <div className="profile-info-row">
          <span className="profile-label">Mobile Number:</span>
          <span className="profile-value">
          </span>
        </div>
        <div className="profile-info-row">
          <span className="profile-label">Address:</span>
          <span className="profile-value">
          </span>
        </div>
        <div className="profile-info-row">
          <span className="profile-label">Aadhaar Number:</span>
          <span className="profile-value">
          </span>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default BidderProfile;
