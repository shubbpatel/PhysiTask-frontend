import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  style from'./userdashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <h2>Welcome to your Dashboard</h2>
        <div className="dashboard-content">
          <div className="dashboard-section">
            <h3>My Projects</h3>
            <ul>
              <li><Link to="/projects/1">Project 1</Link></li>
              <li><Link to="/projects/2">Project 2</Link></li>
              <li><Link to="/projects/3">Project 3</Link></li>
            </ul>
          </div>
          <div className="dashboard-section">
            <h3>My Proposals</h3>
            <ul>
              <li><Link to="/proposals/1">Proposal 1</Link></li>
              <li><Link to="/proposals/2">Proposal 2</Link></li>
              <li><Link to="/proposals/3">Proposal 3</Link></li>
            </ul>
          </div>
          <div className="dashboard-section">
            <h3>My Payments</h3>
            <ul>
              <li><Link to="/payments/1">Payment 1</Link></li>
              <li><Link to="/payments/2">Payment 2</Link></li>
              <li><Link to="/payments/3">Payment 3</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
