import React , { useContext } from "react";
import WeatherContext from "./WeatherContext";

const Box2 = () => {
  const context = useContext(WeatherContext);
  const { weather } = context;

  const unixTimestamp1 = weather.sunrise;
  const unixTimestamp2 = weather.sunset;
  const time1 = new Date(unixTimestamp1 * 1000);
  const time2 = new Date(unixTimestamp2 * 1000);
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
            <td>{time1.toLocaleTimeString("default").slice(0,4)} AM</td>
          </tr>
          <tr>
            <td>Sunset</td>
            <td>{time2.toLocaleTimeString("default").slice(0,4)} PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Box2;
