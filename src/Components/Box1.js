import React , { useContext } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Clock from "react-live-clock";
import WeatherContext from "./WeatherContext";

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

const Box1 = () => {
  
  const context = useContext(WeatherContext);
  const { weather , weatherIcon } = context;
  const defaults = {
    icon: "CLEAR_DAY",
    color: "white",
    size: 80,
    animate: true,
  };

  return (
    <div className="box1">
      <h1>{weather.city}</h1>
      <h3>{weather.country}</h3>
      <br />
      <br />
      <div className="weather">
        <div className="temperature">
          {weather.temperature}°C<div className="feels">Feels like {weather.feelstemp}°C</div>
        </div>
        <div>
          <ReactAnimatedWeather
            icon={weatherIcon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
          <h3>{weather.main}</h3>
        </div>
      </div>
      <br />
      <br />
      <Clock className="clock" format={"hh:mm:ss A"} ticking={true} />
      <div className="current-date">{dateBuilder(new Date())}</div>
    </div>
  );
};

export default Box1;
