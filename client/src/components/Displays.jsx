import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Info = ({display, title}) => (
  <div className = {display} >
    <h1>{title}</h1>
  </div>
);

const Navigation = ({display}) => (
  <div className = {display}>
    <Info title = "degree" />
    <div className = "navbar-button">
      <NavLink className = "navbar-link" to = "/education">
        <FontAwesomeIcon
          className = "button-icon"
          icon = "graduation-cap" />
        <span className = "button-text">Education</span>
      </NavLink>
    </div>
  </div>
);

export {Info, Navigation};
