// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script for projects component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
// ----------------------------------------------------------------------------

export default class Projects extends Component {
  render() {
    return (
      
      <div className="card">
        <div className="card-header">
          <h3>Programming</h3>
        </div>
        <div className="card-body">
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=uuUbdluqSiE&t=7s">3D Graphics in Tkinter </a>
              - Created a 3D environment with python’s Tkinter package for 15-112 term project and was selected to present
            </li>
            <li>
              Cryptocurrency Arbitrage Bot – Developed an arbitrage trading bot for 08-303 term project which was able to successfully perform trades
            </li>
            <li>
              HackAuton – Developed a data processor for machine learning model to predict equipment failures for CMU’s HackAuton
            </li>
            <li>
              Electron Database Reader – Created a user environment to read market data built through Electron for cryptocurrency research project
            </li>
            <li>
              PHP Database Reader – Developed a sqlite database reader to view collected exchange data for cryptocurrency research project
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
