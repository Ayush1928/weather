import React , {useContext} from "react";
import "./Home.css";
import WeatherContext from "./WeatherContext";

const Searchbar = () => {
  const context = useContext(WeatherContext);
  const { handleSearch, setQuery , query} = context;
  return (
    <div>
      <nav className="navbar my-4" style={{ backgroundBlendMode: "normal" }}>
        <div className="container-fluid">
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
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <button className="btn btn-outline-dark" type="submit" onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Searchbar;
