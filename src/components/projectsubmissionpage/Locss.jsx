import React from 'react'

export default function Locss() {
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
          document.getElementById("locationData").innerHTML =
            "Geolocation is not supported by this browser.";
        }
      }

      function showPosition(position) {
        console.log(position);
        document.getElementById("locationData").innerHTML =
          "Latitude: " +
          position.coords.latitude +
          "<br>Longitude: " +
          position.coords.longitude;
      }

      function showError(error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            document.getElementById("locationData").innerHTML =
              "User denied the request for Geolocation.";
            break;
          case error.POSITION_UNAVAILABLE:
            document.getElementById("locationData").innerHTML =
              "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            document.getElementById("locationData").innerHTML =
              "The request to get user location timed out.";
            break;
          case error.UNKNOWN_ERROR:
            document.getElementById("locationData").innerHTML =
              "An unknown error occurred.";
            break;
        }
      }
  
  return (
    <div>
 
        <h1>HTML5 Geolocation API Example</h1>
        <button onClick={getLocation()}>Get Location</button>
        <p id="locationData">Location data will be displayed here.</p>
    
          
    </div>
  )
}
