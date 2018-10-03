// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Entry point for front-end React render
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
// ----------------------------------------------------------------------------

// Style Imports --------------------------------------------------------------
import './style/index.scss';
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import App from './App.js';
// ----------------------------------------------------------------------------

// Render Method --------------------------------------------------------------
render(
  <BrowserRouter>
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));                                             // Renders to document element with id of 'root'
// ----------------------------------------------------------------------------
