import React, { useEffect, useContext } from "react";
import "./Home.css";
import Searchbar from "./Searchbar";
import Box1 from "./Box1";
import Box2 from "./Box2";
import WeatherContext from "./WeatherContext";
import Loader from "./Loader";
const Home = () => {
  const context = useContext(WeatherContext);
  const { weather, getWeather, getLocation } = context;

  useEffect(() => {
    if (navigator.geolocation) {
      getLocation()
        .then((position) => {
          getWeather("", position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          getWeather("", 51.5072, 0.1276);
          alert(
            "You have disabled the location. Please allow to access your location. It will be used for getting your current location's weather."
          );
        });
    } else {
      alert("Location not available");
    } // eslint-disable-next-line
  }, []);

  if (weather.temperature) {
    return (
      <>
        <div className="container">
          <Searchbar className="searchbar" />
          <div className="box">
            <Box1 />
            <Box2 />
          </div>
          <div className="footer">
            <h6>Developed By <span>Ayush</span> | <a href="https://github.com/Ayush1928" rel="noreferrer" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/ayush-bansal-559914214" rel="noreferrer" target="_blank">LinkedIn</a></h6>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="loading container">
        <div className="loadingbox">
          <div>
            <Loader />
          </div>
          <div>
            <h3 className="loading-1-h3">Detecting your location</h3>
            <h3 className="loading-2-h3">
              Your current location wil be used for calculating Real time
              weather.
            </h3>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
