// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Container for Redux root
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faDiceD6,
  faObjectGroup, 
  faCode,
  faServer,
  faAtom
} from '@fortawesome/free-solid-svg-icons'
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import App from '../components/App.js';                                         // React app component
// ----------------------------------------------------------------------------

// Store Import ---------------------------------------------------------------
import configureStore from '../store.js';                                       // Imports configure store function
const store = configureStore()                                                  // Reference for configure store function
// ----------------------------------------------------------------------------

// Font Awesome Library -------------------------------------------------------
library.add( fab, faDiceD6, faObjectGroup, faCode, faServer, faAtom  );
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
