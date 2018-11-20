import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => (
  <ul className = "navbar">
    <li className = "navbar-item">
      <NavLink className = "navbar-link" to = "/home">Home</NavLink>
    </li>
  </ul>
);

export default NavBar;
