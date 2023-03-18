import WeatherContext from "./WeatherContext";
import React, { useState } from "react";
import apiKey from "./apiKey";
import axios from "axios";
const WeatherState = (props) => {
  const [weather, setWeather] = useState(
    {
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
    },
  );
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [weatherIcon,setWeatherIcon] = useState("");
  const [search,setSearch] =useState();

  const getLocation = async (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  const handleSearch = (city) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey.apiKey}`)
      .then((response) => {
        response = response.json();
        setWeather({
          temperature: Math.round(response.main.temp)-273,
          feelstemp: Math.round(response.main.feels_like)-273,
          humidity: response.main.humidity,
          pressure: response.main.pressure,
          visibility: response.visibility/1000,
          windspeed: response.wind.speed,
          sunrise: response.sys.sunrise,
          sunset: response.sys.sunset,
          city: response.name,
          country: response.sys.country,
          main: response.weather[0].main,
        });
      })
      .catch(function (error) {
        console.log(error);
        setWeather("");
        setQuery("");
        setError({ message: "Not Found", query: query });
      });
  }

  //Fetching Weather
  const getWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey.apiKey}`;
    const data = await fetch(url);
    const response = await data.json();
    setWeather({
      lat: lat,
      lon: lon,
      temperature: Math.round(response.main.temp)-273,
      feelstemp: Math.round(response.main.feels_like)-273,
      humidity: response.main.humidity,
      pressure: response.main.pressure,
      visibility: response.visibility/1000,
      windspeed: response.wind.speed,
      sunrise: response.sys.sunrise,
      sunset: response.sys.sunset,
      city: response.name,
      country: response.sys.country,
      main: response.weather[0].main,
    });
    switch (weather.main) {
      case "Haze":
        setWeatherIcon("CLEAR_DAY");
        break;
      case "Clouds":
        setWeatherIcon("CLOUDY");
        break;
      case "Rain":
        setWeatherIcon("RAIN");
        break;
      case "Snow":
        setWeatherIcon("SNOW");
        break;
      case "Dust":
        setWeatherIcon("WIND");
        break;
      case "Drizzle":
        setWeatherIcon("SLEET");
        break;
      case "Fog":
        setWeatherIcon("FOG");
        break;
      case "Smoke":
        setWeatherIcon("FOG");
        break;
      case "Tornado":
        setWeatherIcon("WIND");
        break;
      default:
        setWeatherIcon("CLEAR_DAY");
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weather,
        weatherIcon,
        getWeather,
        getLocation,
        setQuery,
        query,
        handleSearch
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
