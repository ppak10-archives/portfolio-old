/**
 * App Container
 * Wrapper container to introduce Redux Store and Routes
 */

/**
 * Node Modules
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/**
 * Redux Store
 */

import configureStore from '../store';
const store = configureStore();

/**
 * Page Componenets
 */

import DbTest from '../pages/DbTest';
import Education from '../pages/Education';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Research from '../pages/Research';
import Work from '../pages/Work';

/**
 * Components
 */

import Navbar from '../components/Navbar';
import {PrivateRoute} from '../components';

/**
 * Actions
 */

import {alertActions} from '../actions';

/**
 * Root class to load React component
 * @type {Object}
 */
export default class Root extends Component {

  constructor(props) {
    super(props);

    const {dispatch} = this.props;
  }

  /**
   * React render method
   * @return {[type]} [description]
   */
  render() {
    const {alert} = this.props;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            {alert &&
              <div className = {`alert ${alert.type}`}>
                {alert.message}
              </div>}
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/projects" component = {Projects}/>
              <Route path = "/work" component = {Work}/>
              <Route path = "/research" component = {Research}/>
              <Route path = "/education" component = {Education}/>
              <Route path = "/dbtest" component = {DbTest}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
