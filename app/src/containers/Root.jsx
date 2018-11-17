import React, {Component} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from '../components/App';

import configureStore from '../store';
const store = configureStore();

/**
 * Root class to load React component
 * @type {Object}
 */
export default class Root extends Component {
  /**
   * React render method
   * @return {[type]} [description]
   */
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Provider store={store}>
            <App />
          </Provider>
        </Switch>
      </BrowserRouter>
    );
  }
}
