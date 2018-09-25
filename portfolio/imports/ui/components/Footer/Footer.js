// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script for React footer component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import simpleIcons from 'simple-icons';
// ----------------------------------------------------------------------------

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-light">
        <h3>Contact</h3>
        <label>
          Peter Pak -
          <span>
            <a href = "mailto: ppak10@gmail.com">ppak10@gmail.com</a>
          </span>
        </label>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="http://github.com/ppak10">GitHub</a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/ppak10/">LinkedIn</a>
          </li>
        </ul>
      </footer>
    );
  }
}
