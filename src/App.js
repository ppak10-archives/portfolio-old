// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for React App
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// ----------------------------------------------------------------------------

// Page Imports ---------------------------------------------------------------
import Welcome from './pages/Welcome.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import NavigationBar from './components/NavigationBar';
// ----------------------------------------------------------------------------

// App Component --------------------------------------------------------------
class App extends Component {

  render() {
    return (
      <div>
        <NavigationBar />
        <Route exact path = "/" component = { Welcome } />
        <Route path = "/home" component = { Home } />
        <Route path = "/about" component = { About } />
      </div>
    );
  }
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default App
// ----------------------------------------------------------------------------
