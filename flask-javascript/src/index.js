// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Entry point for JavaScript front-end
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import 'bootstrap';                                                             // Imported for popper.js and jquery imports
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
// ----------------------------------------------------------------------------

// Style Import ---------------------------------------------------------------
import './style/index.scss';
// ----------------------------------------------------------------------------

// Container Import -----------------------------------------------------------
import Root from './containers/Root.js';
// ----------------------------------------------------------------------------

// Render Method --------------------------------------------------------------
render(<Root />, document.getElementById('root'));                              // Renders to element with id of 'root'
// ----------------------------------------------------------------------------
