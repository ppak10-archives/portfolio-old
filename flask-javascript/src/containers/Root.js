// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Container for Redux root
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import App from '../components/App.js';                                         // React app component
// ----------------------------------------------------------------------------

// Store Import ---------------------------------------------------------------
import configureStore from '../store.js';                                       // Imports configure store function
const store = configureStore()                                                  // Reference for configure store function
// ----------------------------------------------------------------------------

// Root Container -------------------------------------------------------------
class Root extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Provider store = { store }>
            <App />
          </Provider>
        </Switch>
      </BrowserRouter>
    )
  }
}
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default Root;
// ----------------------------------------------------------------------------
