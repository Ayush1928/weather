import React, { useContext } from "react";
import "./Home.css";
import WeatherContext from "./WeatherContext";

const Searchbar = () => {
  const context = useContext(WeatherContext);
  const { getWeather, setSearch, search, getLocation } = context;

  const handleOnClick = (event) => {
    event.preventDefault();
    getWeather(search);
  };

  const handleCurLocButton = (event) => {
    event.preventDefault();
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
    }
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="searchbar-box">
          <form className="d-flex mx-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              id="searchbar"
              placeholder="Enter Location"
              aria-label="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button
              className="search btn btn-outline-dark"
              type="button"
              onClick={handleOnClick}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              className="search btn btn-outline-dark mx-2"
              type="button"
              onClick={handleCurLocButton}
            >
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
