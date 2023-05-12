import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import style from './projects.css';
import backendUrl from '../../config';
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
} from "@react-google-maps/api";

const libraries = ["places"];  // add this


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
  const [autocomplete, setAutocomplete] = useState(null); // add this
  const [userCoordinates, setUserCoordinates] = useState(''); // add this

  const token = localStorage.getItem('token');

  useEffect(() => {
    let timer;
    if (!user && !token) {
      timer = setTimeout(() => {
        window.location = '/login';
      }, 20000); // Redirect after 5 seconds
    }
    return () => clearTimeout(timer);
  }, [user]);

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };
  const onPlaceChanged = () => {
    if (!autocomplete) return;
    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      return;
    }

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    setUserCoordinates(`${lat},${lng}`);
  };

  useEffect(() => {
    setLoading(true)
    const fetchProjects = async (userCoordinate) => {
      try {
        
        const res = await axios.get(`${backendUrl}/project`);
        const data = await res.data
        
        // const getUserLocation = () => {
        //   return new Promise((resolve, reject) => {
        //     navigator.geolocation.getCurrentPosition(resolve, reject);
        //   });
        // };
        
        // const position = await getUserLocation();
        // // const userCoordinates = `${position.coords.latitude},${position.coords.longitude}`;
        const userCoordinates = userCoordinate;
        // const userCoordinates = '24.8003118,80.97329239999999';
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

   if (userCoordinates) {
      fetchProjects(userCoordinates);
    }else{
      const allProjects = async ()=>{
        setLoading(true)
        const res = await axios.get(`${backendUrl}/project`);
        const data = await res.data;
        setProjects(data);
      }
      allProjects();
      setLoading(false)
    }
    // fetchProjects();
  }, [userCoordinates]);
  

  return (
    <div className="projects-container gradient">
      <div className="navp">
        <Navbar user={user} />
      </div>
      <div className="heading">
        {/* <h3>Location</h3> */}

      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={libraries}
        >
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Enter Your Location"
            />
        </Autocomplete>
      </LoadScript>
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
              to={user || token ? `/projectDetails/${project._id}` : '/login'}
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
