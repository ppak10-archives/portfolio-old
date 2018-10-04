// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for navigation bar
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import { NavLink } from 'react-router-dom';
// ----------------------------------------------------------------------------

// Navigation Bar Component ---------------------------------------------------
const NavigationBar = () => (
  <nav className = "navbar navbar-light bg-light">
    <NavLink to = "/" className = "navbar-brand">Welcome</NavLink>
    <NavLink to = "/home">Home</NavLink>
    <NavLink to = "/about">About</NavLink>
    <NavLink to = "/todo">Todo</NavLink>
  </nav>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default NavigationBar
// ----------------------------------------------------------------------------
