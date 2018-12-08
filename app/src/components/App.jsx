/**
 * App Component
 * Component for React App
 */

/**
 * Node Modules
 */

import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

/**
 * Page Components
 */

const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));
const Work = lazy(() => import('../pages/Work'));
const Research = lazy (() => import('../pages/Research'));
const Education = lazy (() => import('../pages/Education'));

import DbTest from '../pages/DbTest';

/**
 * Components
 */

import Navbar from './Navbar';

const App = () => (
  <Router history = {history}>
    <div>
      <Navbar />
      <Suspense fallback = {<div>Loading...</div>}>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/projects" component = {Projects}/>
          <Route path = "/work" component = {Work}/>
          <Route path = "/research" component = {Research}/>
          <Route path = "/education" component = {Education}/>
          <Route path = "/dbtest" component = {DbTest}/>
        </Switch>
      </Suspense>
    </div>
  </Router>
);

export default App;