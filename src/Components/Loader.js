import React from 'react'
import loader from '../Images/loader.gif'
import './Home.css';
const Loader = () => {
  return (
    <div>
        <img className="loader" src={loader} alt="Loader" />
    </div>
  )
}

export default Loader
