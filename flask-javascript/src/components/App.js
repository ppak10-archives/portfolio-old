// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for React App
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// ----------------------------------------------------------------------------

// Page Imports ---------------------------------------------------------------
import Welcome from '../pages/Welcome';
import Home from '../pages/Home';
import Subreddits from '../pages/Subreddits';
import About from '../pages/About';
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import NavigationBar from './NavigationBar';
// ----------------------------------------------------------------------------

// App Component --------------------------------------------------------------
const App = () => (
  <div>
    <NavigationBar />
    <Route exact path = "/" component = { Welcome } />
    <Route path = "/home" component = { Home } />
    <Route path = "/subreddits" component = { Subreddits } />
    <Route path = "/about" component = { About } />
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default App
// ----------------------------------------------------------------------------
