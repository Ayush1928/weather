import React, { useContext } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherContext from "./WeatherContext";

const Box1 = () => {
  const context = useContext(WeatherContext);
  const { weather } = context;
  return (
    <div className="box1">
      <h1 className="city" style={{ fontSize: "8vh" }}>
        {weather.city}
      </h1>
      <h3>{weather.country}</h3>
      <div className="weather">
        <div className="temperature">
          {weather.temperature}°C
          <div className="feels">Feels like {weather.feelstemp}°C</div>
        </div>
        <div className="weathericon">
          <ReactAnimatedWeather
            icon={weather.icon}
            color="white"
            size={100}
            animate={true}
          />
          <h3>{weather.main}</h3>
        </div>
        <div className="min-max">
          <div className="max-temp">
            <i className="fa-solid fa-arrow-up"></i>&nbsp;Max &nbsp;
            {weather.temp_max}°C
          </div>
          <div className="min-temp">
            <i className="fa-solid fa-arrow-down"></i>
            &nbsp;Min {weather.temp_min}°C
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Box1;
