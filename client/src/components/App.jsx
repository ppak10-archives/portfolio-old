import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/**
 * Page Components
 */
const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));
const Work = lazy(() => import('../pages/Work'));
const Research = lazy (() => import('../pages/Research'));
const Education = lazy (() => import('../pages/Education'));

/**
 * Components
 */
import Navbar from './Navbar';

const App = () => (
  <Router>
    <Suspense fallback = {<div>Loading...</div>}>
      <Navbar />
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/projects" component = {Projects}/>
        <Route path = "/work" component = {Work}/>
        <Route path = "/research" component = {Research}/>
        <Route path = "/education" component = {Education}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;