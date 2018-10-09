// ----------------------------------------------------------------------------
// Original Creator: Bootstrap
// File Developer: Peter Pak
// Description: Component for navigation bar
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import { NavLink } from 'react-router-dom';
// ----------------------------------------------------------------------------

// Navigation Bar Component ---------------------------------------------------
const NavigationBar = () => (
  <nav className = "navbar navbar-expand-lg navbar-light bg-light">

    { /* Welcome Page Link */ }
    <NavLink to = "/" className = "navbar-brand">Welcome</NavLink>

    { /* Navigation Bar Collapse Button */ }
    <button className = "navbar-toggler" type = "button"
      data-toggle = "collapse" data-target = "#navbarSupportedContent"
      aria-controls = "navbarSupportedContent" aria-expanded = "false"
      aria-label = "Toggle navigation">
      <span className = "navbar-toggler-icon"></span>
    </button>

    { /* Navigation Bar Collapsable Content */ }
    <div className = "collapse navbar-collapse" id="navbarSupportedContent">
      <ul className = "navbar-nav mr-auto">

        { /* Home Page Link */ }
        <li className = "nav-item">
          <NavLink className = "nav-link" to = "/home">Home</NavLink>
        </li>

        { /* Examples Dropdown Link */ }
        <li className = "nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
            role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Examples
          </a>

          { /* Dropdown Links */ }
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">

            { /* React Examples Divider */ }
            <h5 className="col">React</h5>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>

            { /* Redux Examples Divider */ }
            <h5 className="col">Redux</h5>
            <div className="dropdown-divider"></div>

            { /* Subreddits Example */ }
            <NavLink className = "dropdown-item nav-link" to = "/subreddits">
              Subreddits
            </NavLink>
          </div>
        </li>

        { /* About Page */ }
        <li className = "nav-item">
          <NavLink className = "nav-link" to = "/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default NavigationBar
// ----------------------------------------------------------------------------
