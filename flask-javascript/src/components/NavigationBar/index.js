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
  <nav className = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

    { /* Welcome Page Link */ }
    <NavLink to = "/" className = "navbar-brand">
      <img className = "rounded-circle brand-border"
        src = "./static/images/navbar.png"
      />
    </NavLink>

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

        { /* Examples Dropdown Link */ }
        <li className = "nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
            role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Examples
          </a>

          { /* Dropdown Links */ }
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">

            { /* Redux Examples Divider */ }
            <h5 className="col">Redux</h5>
            <div className="dropdown-divider"></div>

            <NavLink className = "dropdown-item" to = "/subreddits">
              Subreddits
            </NavLink>

            { /* Three.js Examples Divider */ }
            <h5 className="col">Three.js</h5>
            <div className="dropdown-divider"></div>

            <NavLink className = "dropdown-item" to = "/simplecube">
              Simple Cube
            </NavLink>

            <NavLink className = "dropdown-item" to = "/loaderobjmtl">
              OBJ & MTL Loader
            </NavLink>
          </div>
        </li>

      </ul>
    </div>
  </nav>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default NavigationBar
// ----------------------------------------------------------------------------
