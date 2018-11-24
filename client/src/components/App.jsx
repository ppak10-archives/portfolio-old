import React, {Component} from 'react';
import {Route} from 'react-router-dom';

/**
 * Page Components
 */
import Home from '../pages/Home';
import Work from '../pages/Work';
import Research from '../pages/Research';
import Education from '../pages/Education';

/**
 * Components
 */
import Navbar from './Navbar';

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
        <Navbar />
        <Route exact path = "/" component = {Home}/>
        <Route path = "/work" component = {Work}/>
        <Route path = "/research" component = {Research}/>
        <Route path = "/education" component = {Education}/>
      </div>
    )
  }
}