import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./logonitc-removebg-preview.png"
import logoImage from "./G20_India_2023_logo.png"
const Toolbar = props => (

  <header className="toolbar">
    <nav className="toolbar_navigation">

    <Link to="/"  style={{ textDecoration: "none", color: "white" }}>
    <div className="logo">  <img src={logo} alt="Logo" style={{left :'100%',height: '70px', width: '350px' }}  />
    </div>
  </Link>
      <div className="spacer" />
      <div className="nav-elements">
        <ul>
          <li>
            <NavLink to="/about-us" exact="true" className="activeclass">
              ABOUT NITC
            </NavLink>
          </li>
       
          <li>
          <NavLink to="/placement-stats" exact="true" className="activeclass">
          STATISTICS
          </NavLink>
        </li>
          <li>
            <NavLink to="/our-recruiters" exact className="activeclass">
              OUR RECRUITERS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" exact="true" className="activeclass">
              CONTACT US
            </NavLink>
          </li>
          <li>
          <NavLink to="/register" exact="true" className="activeclass">
            REGISTER
          </NavLink>
        </li>
        </ul>
      </div>
      <Link to="/"  style={{ textDecoration: "none", color: "white" }}>
      <div className="logo">  <img src={logoImage} alt="Logo" style={{marginLeft:'200px',height: '60px', width: '100px' }}  />
      </div>
    </Link>
    
    </nav>
  </header>
);

export default Toolbar;          