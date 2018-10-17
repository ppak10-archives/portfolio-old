// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for React App
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';                                                      // Import react for component
import { Route } from 'react-router-dom';                                       // Import route module from react router dom
import { connect } from 'react-redux';                                          // Import connect module from react redux
import Loadable from 'react-loadable';                                          // Imports module for react code splitting
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import NavigationBar from './NavigationBar';                                    // Import navigation bar component
import Footer from './Footer';                                                  // Import footer component
// ----------------------------------------------------------------------------

// Page Imports ---------------------------------------------------------------
import Welcome from '../pages/Welcome';                                         // Import welcome page component
import About from '../pages/About';                                             // Import about page component
// ----------------------------------------------------------------------------

// Dynamic Page Imports -------------------------------------------------------
const Skills = Loadable({
  loader: () => import('../pages/Skills'),                                      // Import skills page component
  loading: () => <div>Loading...</div>
});
const Education = Loadable({
  loader: () => import('../pages/Education'),                                   // Import skills page component
  loading: () => <div>Loading...</div>
});
const Subreddits = Loadable({
  loader: () => import('../pages/Subreddits'),                                  // Import redux subreddits page component
  loading: () => <div>Loading...</div>
});
const SimpleCube = Loadable({
  loader: () => import('../pages/SimpleCube'),                                  // Import three.js simple cube page component
  loading: () => <div>Loading...</div>
})
const LoaderOBJMTL = Loadable({
  loader: () => import('../pages/LoaderOBJMTL'),                                // Import three.js obj & mtl loader page
  loading: () => <div>Loading...</div>
})
// ----------------------------------------------------------------------------

// App Component --------------------------------------------------------------
const App = () => (                                                             // Component for routes in react application
  <div>
    { /* Navigation Bar */ }
    <NavigationBar />

    { /* Page Routes */ }
    <Route exact path = "/" component = { Welcome } />
    <Route path = "/skills" component = { Skills } />
    <Route path = "/education" component = { Education }/>
    <Route path = "/subreddits" component = { Subreddits } />
    <Route path = "/simplecube" component = { SimpleCube } />
    <Route path = "/loaderobjmtl" component = { LoaderOBJMTL } />
    <Route path = "/about" component = { About } />

    { /* Footer */ }
    <Footer />
  </div>
);
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default App                                                              // Export app component
// ----------------------------------------------------------------------------
