import React, {Component} from 'react';
import {Route} from 'react-router-dom';

/**
 * Page Components
 */
import Home from '../pages/Home';
import Work from '../pages/Work';
import Research from '../pages/Research';

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
        <Route exact path = "/" component = {Home}/>
        <Route path = "/work" component = {Work}/>
        <Route path = "/research" component = {Research}/>
      </div>
    )
  }
}