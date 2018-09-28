// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script for React navigation bar component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// ----------------------------------------------------------------------------

export default class NavigationBar extends Component {
  render() {
    return (

      <nav className="navbar navbar-light bg-light">

        <NavLink to="/" className="navbar-brand">Peter</NavLink>

        {/*
          <NavLink to="/skills" className="nav-link">Skills</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          */}

      </nav>
    );
  }
}
