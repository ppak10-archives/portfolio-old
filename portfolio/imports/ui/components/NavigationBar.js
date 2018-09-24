// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Main script React Navigation Bar component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
// ----------------------------------------------------------------------------

export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="col navbar navbar-default">
        <div className="navbar-header">
          <NavLink  className="col navItem" to={'/'}>Home</NavLink>
          <NavLink  className="col navItem" to={'/portfolio'}>Portfolio</NavLink>
          <NavLink  className="col navItem" to={'/analysis'}>Analysis</NavLink>
          <NavLink  className="col navItem" to={'/about'}>About</NavLink>
        </div>
      </nav>
    );
  }
}
