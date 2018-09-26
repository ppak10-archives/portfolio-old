// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script for biography component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
// ----------------------------------------------------------------------------

export default class Biography extends Component {
  render() {
    return (
      <div className="container biography">
        <h1>Biography</h1>
        <ul>
          <li>Birthdate: Febuary 15th, 1996</li>
          <li>Birthplace: Baltimore, Maryland</li>
          <li>Education: Carnegie Mellon University - Class of 2018</li>
        </ul>
      </div>
    );
  }
}
