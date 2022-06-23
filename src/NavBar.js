import React from "react";
import './App.css';
import links from "./data";

const NavBar = () => {
    return(
        <div className="tabs">
          <button className="homeButton">Home</button>
          <button className="aboutButton">About</button>
          <button className="projectsButton">Projects</button>
          <button className="awardsButton">Awards</button>
        </div>
    )
}

export default NavBar