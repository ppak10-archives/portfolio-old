import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const NavBar = () => (
  <div className = "navbar">
    <ul className = "navbar-list">
      <li className = "navbar-item">
        <NavLink className = "navbar-link" to = "/home">
          <FontAwesomeIcon icon = "code" />
          <span className = "navbar-text">Experience</span>
        </NavLink>
      </li>
      <li className = "navbar-item">
        <a className = "navbar-link" target = "_blank" rel="noopener noreferrer"
          href = "https://www.github.com/ppak10">
          <FontAwesomeIcon icon = {['fab', 'github']} />
        </a>
      </li>
      <li className = "navbar-item">
        <a className = "navbar-link" target = "_blank" rel="noopener noreferrer"
          href = "http://www.linkedin.com/in/ppak10">
          <FontAwesomeIcon icon = {['fab', 'linkedin']} />
        </a>
      </li>
    </ul>
  </div>
);

export default NavBar;
