/**
 * App.component.jsx
 * Component for React App
 */

/**
 * Node Modules
 */

import React from 'react';
import {Switch, Route} from 'react-router-dom';

/**
 * Page Components
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

import Navbar from './Navbar';
import {PrivateRoute} from './PrivateRoute';

const App = () => (
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
);

export default App;
