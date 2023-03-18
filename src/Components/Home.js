import React, { useEffect, useContext } from "react";
import "./Home.css";
import Searchbar from "./Searchbar";
import Box1 from "./Box1";
import Box2 from "./Box2";
import WeatherContext from "./WeatherContext";

const Home = () => {
  const context = useContext(WeatherContext);
  const { weather, getWeather, getLocation ,weatherIcon } = context;

  useEffect(() => {
    if (navigator.geolocation) {
      getLocation()
        //If user allow location service then will fetch data & send it to get-weather function.
        .then((position) => {
          getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
          getWeather(51.5072, 0.1276);
          alert(
            "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
          );
        });
    } else {
      alert("Geolocation not available");
    }// eslint-disable-next-line
  }, [weatherIcon]); 
  

  // useEffect(() => {
  //   const timerID = setInterval(
  //     () => getWeather(weather.lat, weather.lon),
  //     6000
  //   );
  //   clearInterval(timerID);
  // }, []);

  if (weather.temperature) {
    return (
      <div className="container">
        <div className="body">
          <Searchbar className="searchbar" />
          <div className="box">
            <Box1 />
            <Box2 />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {/* <img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} /> */}
        <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
          Detecting your location
        </h3>
        <h3 style={{ color: "white", marginTop: "10px" }}>
          Your current location wil be displayed on the App <br></br> & used for
          calculating Real time weather.
        </h3>
      </>
    );
  }
};

export default Home;
