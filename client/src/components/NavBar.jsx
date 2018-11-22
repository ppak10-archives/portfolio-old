import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const NavBar = () => (
  <div className = "navbar">
    <NavLink className = "navbar-brand" to = "/">
      <img className = "navbar-brand-icon" src = "public/morty.jpeg"/>
      <span className = "navbar-text">Home</span>
    </NavLink>
    <ul className = "navbar-list">
      <li className = "navbar-dropdown">
        <button className = "navbar-dropdown-button"
          to = "/experience">
          <FontAwesomeIcon className = "navbar-icon" icon = "briefcase" />
          <span className = "navbar-text">Experience</span>
        </button>
        <div className = "navbar-dropdown-content">
          <NavLink className = "navbar-link" to = "/work">
            <FontAwesomeIcon className = "navbar-icon" icon = "code" />
            <span className = "navbar-text">Work</span>
          </NavLink>
          <NavLink className = "navbar-link" to = "/research">
            <FontAwesomeIcon className = "navbar-icon" icon = "flask" />
            <span className = "navbar-text">Research</span>
          </NavLink>
        </div>
      </li>
      <li className = "navbar-list-item">
        <a className = "navbar-link"
          target = "_blank"
          rel = "noopener noreferrer"
          href = "https://www.github.com/ppak10">
          <FontAwesomeIcon icon = {['fab', 'github']} />
        </a>
      </li>
      <li className = "navbar-list-item">
        <a className = "navbar-link"
          target = "_blank"
          rel = "noopener noreferrer"
          href = "http://www.linkedin.com/in/ppak10">
          <FontAwesomeIcon icon = {['fab', 'linkedin']} />
        </a>
      </li>
    </ul>
  </div>
);

export default NavBar;
