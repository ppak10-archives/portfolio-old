// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for React App
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';                                                      // Import react for component
import { Route } from 'react-router-dom';                                       // Import route module from react router dom
import { connect } from 'react-redux';                                          // Import connect module from react redux
// ----------------------------------------------------------------------------

// Page Imports ---------------------------------------------------------------
import Welcome from '../pages/Welcome';                                         // Import welcome page component
import Home from '../pages/Home';                                               // Import home page component
import TicTacToe from '../pages/TicTacToe';                                     // Import react tic tac toe page component
import TodoList from '../pages/TodoList';                                       // Import redux todo list page component
import Reddit from '../pages/Reddit';                                           // Import redux reddit page component
import Subreddits from '../pages/Subreddits';                                   // Import redux subreddits page component
import About from '../pages/About';                                             // Import about page component
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import NavigationBar from './NavigationBar';                                    // Import navigation bar component
// ----------------------------------------------------------------------------

// App Component --------------------------------------------------------------
const App = () => (                                                             // Component for routes in react application
  <div>

    { /* Navigation Bar */ }
    <NavigationBar />

    { /* Page Routes */ }
    <Route exact path = "/" component = { Welcome } />
    <Route path = "/home" component = { Home } />
    <Route path = "/tictactoe" component = { TicTacToe } />
    <Route path = "/todolist" component = { TodoList } />
    <Route path = "/reddit" component = { Reddit } />
    <Route path = "/subreddits" component = { Subreddits } />
    <Route path = "/about" component = { About } />
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default App                                                              // Export app component
// ----------------------------------------------------------------------------
