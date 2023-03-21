import WeatherContext from "./WeatherContext";
import React, { useState } from "react";
import apiKey from "./apiKey";

const WeatherState = (props) => {
  const [weather, setWeather] = useState({
    lat: 0,
    lon: 0,
    temperature: 0,
    feelstemp: 0,
    humidity: 0,
    pressure: 0,
    visibility: 0,
    windspeed: 0,
    sunrise: 0,
    sunset: 0,
    city: "",
    country: "",
    main: "",
    icon: "",
    temp_min:0,
    temp_max:0
  });

  const [search, setSearch] = useState("");
  const getLocation = async (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  //Fetching Weather and Updating weather state
  const getWeather = async (city = "", lat, lon) => {
    if (city !== "") {
      var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey.apiKey2}`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey.apiKey2}`;
    }
    
    const data = await fetch(url);
    const response = await data.json();
    const weatherData = {
      lat: response.coord.lat,
      lon: response.coord.lon,
      temperature: Math.round(response.main.temp) - 273,
      feelstemp: Math.round(response.main.feels_like) - 273,
      humidity: response.main.humidity,
      pressure: response.main.pressure,
      visibility: response.visibility / 1000,
      windspeed: response.wind.speed,
      sunrise: response.sys.sunrise,
      sunset: response.sys.sunset,
      city: response.name,
      country: response.sys.country,
      main: response.weather[0].main,
      temp_min:Math.round(response.main.temp_min)-273,
      temp_max:Math.round(response.main.temp_max)-273
    };
    setWeather(weatherData);
  
    let icon = "CLEAR_DAY";
    switch (weatherData.main) {
      case "Haze":
        icon = "CLEAR_DAY";
        break;
      case "Clouds":
        icon = "CLOUDY";
        break;
      case "Mist":
        icon = "FOG";
        break;
      case "Rain":
        icon = "RAIN";
        break;
      case "Thunderstorm":
        icon = "RAIN";
        break;
      case "Snow":
        icon = "SNOW";
        break;
      case "Dust":
        icon = "WIND";
        break;
      case "Drizzle":
        icon = "SLEET";
        break;
      case "Fog":
        icon = "FOG";
        break;
      case "Smoke":
        icon = "FOG";
        break;
      case "Tornado":
        icon = "WIND";
        break;
      default:
        icon = "CLEAR_DAY";
    }
    setWeather({ ...weatherData, icon });
  };
  return (
    <WeatherContext.Provider
      value={{
        weather,
        getWeather,
        getLocation,
        search,
        setSearch
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
