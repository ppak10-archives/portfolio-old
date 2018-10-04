// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Entry point for client javascript front-end
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// ----------------------------------------------------------------------------

// Style Import ---------------------------------------------------------------
import './style/index.scss';
// ----------------------------------------------------------------------------

// React Component Import -----------------------------------------------------
import App from './App.js';
// ----------------------------------------------------------------------------

// Redux Imports --------------------------------------------------------------
import store from './store.js';
// ----------------------------------------------------------------------------

// Render Method --------------------------------------------------------------
render(
  <BrowserRouter>
    <Switch>
      <Provider store = { store } >
        <App />
      </Provider>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));                                             // Renders to document element with id of 'root'
// ----------------------------------------------------------------------------
