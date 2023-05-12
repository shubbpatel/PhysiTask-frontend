import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../navbar/Navbar";
// import { createProject } from '../services/projects';
import style from "./projectsubmission.css";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
// import { Loader } from "@googlemaps/js-api-loader";

const libraries = ["places"];

const ProjectSubmission = ({ user }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [markerInstance, setMarkerInstance] = useState(null);
  const [mapZoom, setMapZoom] = useState(5);

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

    setFormData((prevFormData) => ({
      ...prevFormData,
      coordinates: `${lat},${lng}`,
      location: place.formatted_address,
    }));

    // Update map center and marker position
    if (mapInstance) {
      mapInstance.panTo({ lat, lng });
      // setMapZoom(15)
      if (markerInstance) {
        markerInstance.setPosition({ lat, lng });
        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend(markerInstance.getPosition());
        mapInstance.fitBounds(bounds);
      }
    }
  };
  const onMapLoad = (map) => {
    setMapInstance(map);
  };

  const onMarkerLoad = (marker) => {
    setMarkerInstance(marker);
  };

  const handleSelectLocation = () => {
    setShowMap(true);
  };
  const handleMapClick = async (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
  
    setFormData({
      ...formData,
      coordinates: `${lat},${lng}`,
    });
  
    await reverseGeocode(lat, lng);
    // const mapInstance = mapRef.current;

    // Update the map's center to the clicked coordinates
    // mapInstance.panTo({ lat: lat, lng: lng });
  
    // Set the map's zoom level
    // mapInstance.setZoom(15); // Adjust the zoom level as desired

  };
  

  useEffect(() => {
    let timer;
    if (!user) {
      timer = setTimeout(() => {
        window.location = "/login";
      }, 500); // Redirect after 5 seconds
    }
    return () => clearTimeout(timer);
  }, [user]);

  if (user) {
    var uID = user._id;
  }

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    deadline: "",
    category: "",
    userId: uID,
    location: "",
    coordinates: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any value is empty
    const isAnyValueEmpty = Object.values(formData).some(
      (value) => value === ""
    );

    if (isAnyValueEmpty) {
      alert("Please fill out all fields before submitting the form.");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:4000/projectsubmission",
          formData
        );
        console.log(response.data);
        alert("Form submitted");
      } catch (error) {
        console.error(error);
      }
    }
  };


const getCurrentLocation = async () => {
  try {
    // Replace with your Google Geolocation API key
    // const apiKey = "YOUR_API_KEY";

    // Request body for Google Geolocation API
    const requestBody = {
      considerIp: true,
    };

    // Make a POST request to the Google Geolocation API
    const response = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
      requestBody
    );

    const { lat, lng } = response.data.location;
    console.log(response.data.location);

    setFormData((prevFormData) => ({
      ...prevFormData,
      coordinates: `${lat},${lng}`,
    }));

    reverseGeocode(lat, lng);

  } catch (error) {
    console.error("Error fetching location data:", error);
  }
};


  // const getCurrentLocation = () => {
  //   const options = {
  //     enableHighAccuracy: true,
  //     timeout: 10000,
  //     maximumAge: 0,
  //   };
  
  //   const success = (position) => {
  //     const lat = position.coords.latitude;
  //     const lng = position.coords.longitude;
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       coordinates: `${lat},${lng}`,
  //     }));
  //     reverseGeocode(lat, lng);
  //   };
  
  //   const error = (err) => {
  //     console.error(err);
  //   };
  
  //   navigator.permissions.query({ name: "geolocation" }).then((result) => {
  //     if (result.state === "granted") {
  //       navigator.geolocation.getCurrentPosition(success, error, options);
  //     } else if (result.state === "prompt") {
  //       alert("Please grant permission to access your location.");
  //     } else if (result.state === "denied") {
  //       alert("You have denied permission to access your location.");
  //     }
  //   });
  // };
  
  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      );
      if (response.data.results[0]) {
        console.log(response.data);
        setFormData((prevFormData) => ({
          ...prevFormData,
          location: response.data.results[0].formatted_address,
        }));
      } else {
        console.error("No results found");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  // Your form JSX here, including input fields and submit button, with the onSubmit handler set to handleSubmit

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const mapRef = useRef();

  return (
    <div className="ps gradient">
      <div className="nav">
        <Navbar user={user} />
      </div>

      <div className="project-form-container">
        <h1>Create a Task (काम अपलोड karo)</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          <label htmlFor="budget">Budget in INR:</label>

          <input
            type="number"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
          />
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleInputChange}
          />
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location-input"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          <label htmlFor="coordinates">Coordinates:</label>
          <input
            type="text"
            id="coordinates"
            name="coordinates"
            value={formData.coordinates}
            readOnly
          />
          {/* <button type="button" onClick={getCurrentLocation}>
            Use Current Location
          </button> */}

          <button type="button" onClick={handleSelectLocation}>
            Pin Location from Map
          </button>

          {showMap && (
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
              libraries={libraries}
            >
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <input
                  type="text"
                  id="location-input"
                  name="location"
                  placeholder="Search Location"
                />
              </Autocomplete>

              <GoogleMap
                ref={mapRef}
                mapContainerStyle={{
                  width: "100%",
                  height: "400px",
                }}
                className='google-map-container'
                center={{ lat: 20.5937, lng: 78.9629 }} // Center of India
                zoom={mapZoom}
                onClick={handleMapClick}
                onMapLoad={onMapLoad}
              >
                <Marker
                  // ref={mapRef}
                  onLoad={onMarkerLoad}

                  position={{
                    lat: parseFloat(formData.coordinates.split(",")[0]),
                    lng: parseFloat(formData.coordinates.split(",")[1]),
                  }}
                />
              </GoogleMap>
            </LoadScript>
          )}
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Select a category</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Design">house Work</option>
            <option value="Design">Design</option>
            <option value="House Work">Electric work</option>
            <option value="Electic work">Design</option>
            <option value="Writing">Writing</option>
            <option value="Marketing">Marketing</option>
            <option value="Delivery">Delivery</option>
            <option value="Video & Animation">Video & Animation</option>
          </select>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectSubmission;
