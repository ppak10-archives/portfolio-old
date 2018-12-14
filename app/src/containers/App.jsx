/**
 * App Container
 * Wrapper container to introduce Redux Store and Routes
 */

/**
 * Node Modules
 */

import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/**
 * Page Componenets
 */

import Education from '../pages/Education';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Projects from '../pages/Projects';
import Register from '../pages/Register';
import Research from '../pages/Research';
import Work from '../pages/Work';
import DbTest from '../pages/DbTest';

/**
 * Components
 */

import Navbar from '../components/Navbar';
import {PrivateRoute} from '../components';


/**
 * App class to load React component
 * @type {Object}
 */
class App extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * React render method
   * @return {[type]} [description]
   */
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/login" component = {Login} />
            <Route path = "/projects" component = {Projects}/>
            <Route path = "/work" component = {Work}/>
            <Route path = "/research" component = {Research}/>
            <Route path = "/education" component = {Education}/>
            <Route path = "/register" component = {Register} />
            <PrivateRoute path = "/private" component = {DbTest} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
