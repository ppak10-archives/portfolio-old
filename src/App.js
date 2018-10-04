// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for React App
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
// ----------------------------------------------------------------------------

// Page Imports ---------------------------------------------------------------
import Welcome from './pages/Welcome.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import ReduxTodo from './pages/ReduxTodo.js';
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import NavigationBar from './components/NavigationBar';
// ----------------------------------------------------------------------------

// App Component --------------------------------------------------------------
const App = () => (
  <div>
    <NavigationBar />
    <Route exact path = "/" component = { Welcome } />
    <Route path = "/home" component = { Home } />
    <Route path = "/about" component = { About } />
    <Route path = "/todo" component = { ReduxTodo } />
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default App
// ----------------------------------------------------------------------------
