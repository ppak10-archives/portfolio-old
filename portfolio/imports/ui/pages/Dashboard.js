// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Layout script for Dashboard page component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import Projects from '../components/Projects/Projects.js';
import Skills from '../components/Skills/Skills.js';
// ----------------------------------------------------------------------------

// Dashboard Component --------------------------------------------------------
export default class Dashboard extends Component {
  render() {
    return (
      <div>

        {/* Portfolio Description */}
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Peter Pak</h1>
            <h6>Materials Scientist and Software Developer</h6>
          </div>
          <hr></hr>

          {/* Biography information */}
          <div className="container">
            <p>
              I am a graduate from
              <a href="https://www.cmu.edu/"> Carnegie Mellon University's </a>
              undergraduate
              <a href="https://www.cmu.edu/engineering/materials/"> Materials Science and Engineering </a>
              program with a passion for hardware and software development.
              In addition to my four years of undergraduate studies,
              I have spent 7 semesters as a student researcher for
              <a href="https://www.cmu.edu/engineering/materials/people/faculty/bios/porter.html"> Dr. Porter's </a>
              group on Gallium Oxide research focusing on epitaxial growth.
            </p>
          </div>
        </div>

        {/* Projects */}
        <Projects />

        {/* Skills */}
        <Skills />

      </div>
    );
  }
}
// ----------------------------------------------------------------------------
