import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "./projectDetails.css";
import Navbar from "../navbar/Navbar";

const ProjectDetails = ({ user }) => {
  const [post, setPost] = useState({});
  const [editing, setEditing] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [bid, setBid] = useState({ amount: "", message: "" });
  const [showBids, setShowBids] = useState(false);
  const [bids, setBids] = useState([]);

  const fetchBids = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/bid/project/${id}`
      );
      console.log(response.data);
      setBids(response.data);
    } catch (error) {
      console.log("Failed to fetch bids");
    }
  };

  const handleShowBids = () => {
    setShowBids(!showBids);
    const bids = document.getElementById("bidCont");
    bids.style = "max-height:350px";
    if (!showBids) {
      fetchBids();
    }
  };

  const handleSubmitBid = async (e) => {
    e.preventDefault();
    const newBid = {
      ...bid,
      projectId: post._id,
      userId: user._id,
      username: user.displayName,
    };
    try {
      await axios.post("http://localhost:4000/bid", newBid);
      setBid({ amount: "", message: "" });
      alert("Bid submitted successfully!");
    } catch (error) {
      alert("Failed to submit bid");
    }
  };

  const handleBidInputChange = (e) => {
    const { name, value } = e.target;
    setBid({ ...bid, [name]: value });
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:4000/project/${id}`);
      setPost(response.data);
      setUpdatedPost(response.data);
    };

    fetchPost();
  }, [id]);

  const updateProject = async () => {
    try {
      await axios.put(`http://localhost:4000/projectupdate/${id}`, updatedPost);
      setPost(updatedPost);
      setEditing(false);
    } catch (error) {
      // handle error
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedPost({ ...updatedPost, [name]: value });
  };

  const deleteProject = async () => {
    const id = post._id;
    try {
      await axios.delete(`http://localhost:4000/projectdelete/${id}`);
      // handle successful deletion
      navigate("/profile");
    } catch (error) {
      // handle error
    }
  };
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="postDetailss">
      <Navbar user={user} />
      <div
        className="projects-lists "
        style={{ margin: "0", overflow: "auto" }}
      >
        <div className="project-cards " style={{ margin: "2rem 0rem" }}>
          {editing ? (
            <>
              <input
                type="text"
                name="title"
                value={updatedPost.title}
                onChange={handleInputChange}
              />
              <textarea
                name="description"
                value={updatedPost.description}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="budget"
                value={updatedPost.budget}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="deadline"
                value={updatedPost.deadline}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="category"
                value={updatedPost.category}
                onChange={handleInputChange}
              />
              <button onClick={updateProject}>Save</button>
              <button onClick={() => setEditing(false)}>Cancel</button>
            </>
          ) : (
            <>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <h4>Rs.{post.budget}/-</h4>
              <div className="project-metas">
                <span>Deadline: {post.deadline}</span>
                <span>{post.category}</span>
              </div>
              <div className="project-metas">
                <span>{post.location}</span>
              </div>
            </>
          )}

          {user._id === post.userId ? (
            <div>
              <button className="view-detailss" onClick={deleteProject}>
                DELETE
              </button>
              <button
                className="view-detailss"
                onClick={() => setEditing(!editing)}
              >
                {editing ? "CANCEL" : "UPDATE"}
              </button>
              <button className="view-detailss" onClick={handleShowBids}>
                {showBids ? "Hide Bids" : "Show Bids"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitBid}>
              <input
                type="number"
                name="amount"
                value={bid.amount}
                onChange={handleBidInputChange}
                placeholder="Bid amount"
                required
              />
              <input
                // type="Number"
                name="number"
                value={bid.number}
                onChange={handleBidInputChange}
                placeholder="Mobile number"
                required
              />
              <textarea
                name="message"
                value={bid.message}
                onChange={handleBidInputChange}
                placeholder="Message"
                required
              />
              <button className="view-detailss">Bid</button>
              <button className="view-detailss" onClick={handleShowBids}>
                {showBids ? "Hide Bids" : "Show Bids"}
              </button>{" "}
            </form>
          )}

          <div id="bidCont" className="bidContainers">
            {showBids &&
              bids.map((bid) => (
                <div key={bid._id} className="bidBoxs">
                  <h3 >Bidder: <Link to={`/bidderProfile/${bid.userId}`} style={{ color: "black" }} >{bid.username}</Link> </h3>
                  <p>Phone No: {bid.number}</p>
                  <p>Phone No: {bid.userId}</p>
                  <p>Amount: {bid.amount}</p>
                  <p>Message: {bid.message}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
