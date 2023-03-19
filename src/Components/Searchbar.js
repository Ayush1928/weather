import React , { useContext } from "react";
import "./Home.css";
import WeatherContext from "./WeatherContext";

const Searchbar = () => {
  const context = useContext(WeatherContext);
  const { getWeather , setSearch , search } = context;

  const handleOnClick = (event) => {
    event.preventDefault();
    getWeather(search);
  }
  return (
    <div>
        <div className="container-fluid my-4">
          <form
            className="d-flex mx-auto"
            role="search"
            style={{ width: "30vw" }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter Location"
              aria-label="Search"
              value={search}
              onChange = {(event) => setSearch(event.target.value)}
            />
            <button className="search btn btn-outline-dark" type="button" onClick={handleOnClick}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            {/* <button className="search btn btn-outline-dark mx-2" type="submit">
              <i className="fa-solid fa-location-dot" onClick={()=>{handleLocation()}}></i>
            </button> */}
          </form>
        </div>
    </div>
  );
};

export default Searchbar;
