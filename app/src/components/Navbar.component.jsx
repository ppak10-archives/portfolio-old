/**
 * Navbar.component.jsx
 * Navigation bar component to route and display pages
 */

// Node Modules
import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Navbar = ({alerts, authentication, logout}) => {
  const loggedIn = authentication.loginStatus.loggedIn;
  const navbarList = loggedIn ? AuthenticatedNavbar(logout) : DefaultNavbar;
  return (
    <div className = "navbar">
      <NavLink className = "navbar-brand" to = "/">
        <img className = "navbar-brand-icon" src = "public/images/morty.jpeg"/>
        <span className = "button-text">Home</span>
      </NavLink>
      {navbarList}
    </div>
  );
}

const AuthenticatedNavbar = (logout) => (
  <ul className = "navbar-list">
    <li className = "navbar-button">
      <NavLink className = "navbar-link" to = "/projects">
        <FontAwesomeIcon className = "button-icon" icon = "sitemap" />
        <span className = "button-text">Projects</span>
      </NavLink>
    </li>
    <li className = "navbar-dropdown">
      <a className = "navbar-button">
        <FontAwesomeIcon className = "button-icon" icon = "briefcase" />
        <span className = "button-text">Experience</span>
      </a>
      <ul className = "navbar-dropdown-content">
        <li className = "navbar-button">
          <NavLink className = "navbar-link" to = "/work">
            <FontAwesomeIcon className = "button-icon" icon = "code" />
            <span className = "button-text">Work</span>
          </NavLink>
        </li>
        <li className = "navbar-button">
          <NavLink className = "navbar-link" to = "/research">
            <FontAwesomeIcon className = "button-icon" icon = "flask" />
            <span className = "button-text">Research</span>
          </NavLink>
        </li>
        <li className = "navbar-button">
          <NavLink className = "navbar-link" to = "/education">
            <FontAwesomeIcon
              className = "button-icon"
              icon = "graduation-cap" />
            <span className = "button-text">Education</span>
          </NavLink>
        </li>
      </ul>
    </li>
    <li className = "navbar-button">
      <a className = "navbar-link" onClick = {logout}>
        <FontAwesomeIcon className = "button-icon" icon = "sign-out-alt" />
        <span className = "button-text">Logout</span>
      </a>
    </li>
  </ul>
);

const DefaultNavbar = (
  <ul className = "navbar-list">
    <li className = "navbar-button">
      <NavLink className = "navbar-link" to = "/projects">
        <FontAwesomeIcon className = "button-icon" icon = "sitemap" />
        <span className = "button-text">Projects</span>
      </NavLink>
    </li>
    <li className = "navbar-dropdown">
      <a className = "navbar-button">
        <FontAwesomeIcon className = "button-icon" icon = "briefcase" />
        <span className = "button-text">Experience</span>
      </a>
      <ul className = "navbar-dropdown-content">
        <li className = "navbar-button">
          <NavLink className = "navbar-link" to = "/work">
            <FontAwesomeIcon className = "button-icon" icon = "code" />
            <span className = "button-text">Work</span>
          </NavLink>
        </li>
        <li className = "navbar-button">
          <NavLink className = "navbar-link" to = "/research">
            <FontAwesomeIcon className = "button-icon" icon = "flask" />
            <span className = "button-text">Research</span>
          </NavLink>
        </li>
        <li className = "navbar-button">
          <NavLink className = "navbar-link" to = "/education">
            <FontAwesomeIcon
              className = "button-icon"
              icon = "graduation-cap" />
            <span className = "button-text">Education</span>
          </NavLink>
        </li>
      </ul>
    </li>
    <li className = "navbar-button">
      <a className = "navbar-link" 
        target = "_blank"
        rel = "noopener noreferrer"
        href = "https://www.github.com/ppak10">
        <FontAwesomeIcon icon = {['fab', 'github']} />
      </a>
    </li>
    <li className = "navbar-button">
      <a className = "navbar-link" 
        target = "_blank"
        rel = "noopener noreferrer"
        href = "http://www.linkedin.com/in/ppak10">
        <FontAwesomeIcon icon = {['fab', 'linkedin']} />
      </a>
    </li>
  </ul>
);

export default Navbar;
