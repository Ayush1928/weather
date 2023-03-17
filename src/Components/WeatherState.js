import WeatherContext from "./WeatherContext";
import React, { useState } from "react";
import apiKey from "./apiKey";

// const delay = ms => new Promise(res => setTimeout(res, ms));

const WeatherState = (props) => {
  const [weather, setWeather] = useState(
    {
      lat: 0,
      lon: 0,
      temperature: 0,
      weathericon: "CLEAR_DAY",
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

  const [locationTimer, setLocationTimer] = useState(null);

  const getLocation = async (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  //Fetching Weather
  const getWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey.apiKey}`;
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
    console.log(response.main.temp);
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
    // switch (weather.main) {
    //   case "Haze":
    //     setWeather({...weather, weathericon: "CLEAR_DAY" });
    //     break;
    //   case "Clouds":
    //     setWeather({...weather, weathericon: "CLOUDY" });
    //     break;
    //   case "Rain":
    //     setWeather({...weather, weathericon: "RAIN" });
    //     break;
    //   case "Snow":
    //     setWeather({...weather, weathericon: "SNOW" });
    //     break;
    //   case "Dust":
    //     setWeather({...weather, weathericon: "WIND" });
    //     break;
    //   case "Drizzle":
    //     setWeather({...weather, weathericon: "SLEET" });
    //     break;
    //   case "Fog":
    //     setWeather({...weather, weathericon: "FOG" });
    //     break;
    //   case "Smoke":
    //     setWeather({...weather, weathericon: "FOG" });
    //     break;
    //   case "Tornado":
    //     setWeather({...weather, weathericon: "WIND" });
    //     break;
    //   default:
    //     setWeather([{...weather, weathericon: "CLEAR_DAY" }]);
    // }
    console.log(weather.country);
  };

  return (
    <WeatherContext.Provider
      value={{
        weather,
        getWeather,
        getLocation,
        locationTimer,
        setLocationTimer,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
