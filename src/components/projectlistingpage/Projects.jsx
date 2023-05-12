import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import style from './projects.css';

const toRadians = (degrees) => {
  return (degrees * Math.PI) / 180;
};

const calculateDistance = (userCoordinates, projectCoordinates) => {
  const R = 6371; // Earth's radius in km
  const [userLat, userLng] = userCoordinates.split(',').map(parseFloat);
  const [projectLat, projectLng] = projectCoordinates.split(',').map(parseFloat);

  const dLat = toRadians(projectLat - userLat);
  const dLng = toRadians(projectLng - userLng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(userLat)) *
      Math.cos(toRadians(projectLat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const Projects = ({ user }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    let timer;
    if (!user) {
      timer = setTimeout(() => {
        window.location = '/login';
      }, 20000); // Redirect after 5 seconds
    }
    return () => clearTimeout(timer);
  }, [user]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        
        const res = await fetch('http://localhost:4000/project');
        const data = await res.json();
        
        const getUserLocation = () => {
          return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
        };
        
        const position = await getUserLocation();
        // const userCoordinates = `${position.coords.latitude},${position.coords.longitude}`;
        const userCoordinates = '23.1685786,79.9338798';
        const radius = 10; // 10 km radius
        
        const filteredProjects = data.filter((project) => {
          const distance = calculateDistance(
            userCoordinates,
            project.coordinates
            );
            return distance <= radius;
          });
          
          setProjects(filteredProjects);
          setLoading(false); // Set loading to true before fetching
        console.log(filteredProjects);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchProjects();
  }, []);
  

  return (
    <div className="projects-container gradient">
      <div className="navp">
        <Navbar user={user} />
      </div>
      <div className="heading">
        <h1>Available काम</h1>
      </div>

{
  loading? (
    <div className="loading-indicator"></div> // Show buffering circle
    ):(

      <div className="projects-list gradient">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p className="limited-text">{project.description}</p>
            <h4>Rs.{project.budget}/-</h4>
            <div className="project-meta">
              <span>Deadline: {project.deadline}</span>
              <span>{project.category}</span>
            </div>
            <div className="project-meta">
              <span>{project.location}</span>
            </div>
            <Link
              to={user ? `/projectDetails/${project._id}` : '/login'}
              className="view-details"
              >
              View Details
            </Link>
          </div>
        ))}
      </div>
        )
      }
    </div>
  );
};

export default Projects;
