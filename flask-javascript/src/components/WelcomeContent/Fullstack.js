// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for full-stack development skills
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Full-stack Development Skills -----------------------------------------------
const Fullstack = () => (
  <ul className = "list-group">

    <li className = "list-group-item list-group-item-light">
      <p>
        Frameworks –
        <span>
          <a target = "_blank" rel="noopener noreferrer"
            href = "https://nodejs.org/en/">
            &nbsp;NodeJS
          </a>,
          <a target = "_blank" rel="noopener noreferrer"
            href = "https://webpack.js.org/">
            &nbsp;Webpack
          </a>,
          <a target = "_blank" rel="noopener noreferrer"
            href = "http://flask.pocoo.org/">
            &nbsp;Flask
          </a>,
          <a target = "_blank" rel="noopener noreferrer"
            href = "https://electronjs.org/">
            &nbsp;Electron
          </a>,
          <a target = "_blank" rel="noopener noreferrer"
            href = "https://www.meteor.com/">
            &nbsp;Meteor
          </a>
        </span>
      </p>
    </li>

    <li className = "list-group-item list-group-item-light">
      <p>
        UI – HTML5, CSS, Bootstrap, React, Redux, Sass, D3, WebGL, PHP7,
        Jinja2, Kivy, Tkinter
      </p>
    </li>

    <li className = "list-group-item list-group-item-light">
      <p>
        Database Packages – MySQL, SQLite3, PostgreSQL, MongoDB
      </p>
    </li>

    <li className = "list-group-item list-group-item-light">
      <p>
        Other Unmentioned Languages – C, C#, C++, MATLAB, Visual Basic
      </p>
    </li>

  </ul>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Fullstack;
// ----------------------------------------------------------------------------
