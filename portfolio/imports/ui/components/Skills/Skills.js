// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script for skills component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
// ----------------------------------------------------------------------------

// Skills Component -----------------------------------------------------------
export default class Skills extends Component {
  render() {
    return (
      <div>

        {/* Materials Science and Engineering */}
        <div className="card">
          <div className="card-header">
            <h3>Materials Science and Engineering</h3>
          </div>
          <div className="card-body">
            <ul>
              <li>
                Instruments – Scanning Electron Microscope, X-ray Diffraction, Atomic Force Microscopy, Optical Microscopy
              </li>
              <li>
                Operations – Tube furnace operations, Soldering, Brazing, Polishing, Etching, Carpentry, Metalworking
              </li>
              <li>
                Programs – CES, FactSage, ThermoCalc
              </li>
            </ul>
          </div>
        </div>

        {/* Frontend/Fullstack Development */}
        <div className="card">
          <div className="card-header">
            <h3>Frontend/Fullstack Development</h3>
          </div>
          <div className="card-body">
            <ul>
              <li>
                WebApp Frameworks – NodeJS, Meteor, Electron, Flask
              </li>
              <li>
                UI – HTML5, CSS, Bootstrap, React, Redux, Sass, D3, WebGL, PHP7, Jinja2, Kivy, Tkinter
              </li>
              <li>
                Database Packages – MySQL, SQLite3, PostgreSQL, MongoDB
              </li>
              <li>
                Other Unmentioned Languages – C, C#, C++, MATLAB, Visual Basic
              </li>
            </ul>
          </div>
        </div>

        {/* Other */}
        <div className="card">
          <div className="card-header">
            <h3>Other Skills</h3>
          </div>
          <div className="card-body">
            <ul>
              <li>
                3D Design - Unity, Blender, AutoCAD, SolidWorks
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}
// ----------------------------------------------------------------------------
