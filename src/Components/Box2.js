import React , { useContext } from "react";
import WeatherContext from "./WeatherContext";
import Clock from 'react-live-clock';
import Timestamp from "react-timestamp";

const Box2 = () => {
  const context = useContext(WeatherContext);
  const { weather } = context;

   
  return (
    <div className="box2">
      <table className="table text-light table1">
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{weather.humidity}%</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{weather.pressure} mBar</td>
          </tr>
          <tr>
            <td>Visibility</td>
            <td>{weather.visibility} km</td>
          </tr>
          <tr>
            <td>Wind Speed</td>
            <td>{weather.windspeed} km/h</td>
          </tr>
          <tr>
            <td>Sunrise</td>
            <td>{<Timestamp date={weather.sunrise}/>}</td>
          </tr>
          <tr>
            <td>Sunset</td>
            <td><Clock format={'h:mm a Z'} date={weather.sunset}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Box2;
