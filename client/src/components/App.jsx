import React, {Component} from 'react';
import {Route} from 'react-router-dom';

/**
 * Page Components
 */
import Welcome from '../pages/Welcome';
import Home from '../pages/Home';

/**
 * Components
 */
import NavBar from './NavBar';

/**
 * React App class
 */
export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <NavBar />
        <Route exact path = '/' component = {Welcome}/>
        <Route path = '/home' component = {Home}/>
      </div>
    )
  }
}