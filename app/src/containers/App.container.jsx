/**
 * App.container.jsx
 * Wrapper container to introduce Redux Store and Router to App component
 */

// Node Modules
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

// Components
import AppComponent from '../components/App.component';

// Redux Store
import configureStore from '../store';
const store = configureStore();

/**
 * App class to load React component
 * @type {Object}
 */
export class App extends Component {
  /**
   * Constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * React render method
   * @return {[type]} [description]
   */
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <AppComponent />
        </Router>
      </Provider>
    );
  }
}
