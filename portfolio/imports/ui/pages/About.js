// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Layout script for About page component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
// ----------------------------------------------------------------------------

// Component Imports ------------------------------------------------------------
import Biography from '../components/Biography/Biography.js';
// ----------------------------------------------------------------------------

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <Biography />
      </div>
    );
  }
}
