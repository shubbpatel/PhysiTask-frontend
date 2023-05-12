import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "../userProfile/userprofile.css";

const UserProfile = ({ user }) => {
  const [myPosts, setMyPosts] = useState([]);

  // const [user_id, setUser_id] = useState(null);

  if (user) {
    const uID = user._id;

    // setUser_id(uID)
    console.log(uID);
    // console.log(user);
    // console.log(user_id);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `http://localhost:4000/profile/${user._id}`
      );
      setMyPosts(response.data);
    };

    if (user) {
      fetchPosts();
    }
  }, [user]);

  return (
    <div className="projects-container gradient">
      <div className="navp">
        <Navbar user={user} />
      </div>
      <div className="profile-container">
        <div className="profile-card">
          <img
            src={user ? user.profileImage : ""} // Replace this with the actual profile picture URL
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <div className="profile-info-row">
              <span className="profile-label">First Name:</span>
              <span className="profile-value">
                {user ? user.displayName : ""}
              </span>
            </div>
            <div className="profile-info-row">
              <span className="profile-label">Last Name:</span>
              <span className="profile-value">
                {user ? user.displayName : ""}
              </span>
            </div>
            <div className="profile-info-row">
              <span className="profile-label">Mobile Number:</span>
              <span className="profile-value">
                {user ? user.displayName : ""}
              </span>
            </div>
            <div className="profile-info-row">
              <span className="profile-label">Address:</span>
              <span className="profile-value">
                {user ? user.displayName : ""}
              </span>
            </div>
            <div className="profile-info-row">
              <span className="profile-label">Aadhaar Number:</span>
              <span className="profile-value">
                {user ? user.displayName : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
        <h2>My projects</h2>
      <div className="projects-list gradient">
        {myPosts !== null &&
          myPosts.map((post) => (
            <div key={post._id} className="project-card">
              <h2>{post.title}</h2>
              <p className="limited-text">{post.description}</p>
              <h4>Rs.{post.budget}/-</h4>
              <div className="project-meta">
                <span>{post.deadline}</span>
                <span>{post.category}</span>
              </div>
              <Link to={`/projectdetails/${post._id}`} className="view-details">
                View Details
              </Link>
              {/* <button className="view-details" style={{outline:'none', border:'none'}}
            onClick={deleteProject} >DELETE</button> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserProfile;
