import React from "react";
import "./Home.css";
const Searchbar = () => {
  return (
    <div>
      <nav className="navbar my-4" style={{backgroundBlendMode:"normal"}}>
        <div className="container-fluid">
          <form className="d-flex mx-auto" role="search" style={{width:"30vw"}}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter Location"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Searchbar;
