/**
 * Root.jsx
 * Wrapper component to introduce Redux store and React-Router to App container
 */

// Node Modules
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

// Container
import {App} from './containers';

// Redux Store
import configureStore from './store';
export const store = configureStore();

export const Root = () => (
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
