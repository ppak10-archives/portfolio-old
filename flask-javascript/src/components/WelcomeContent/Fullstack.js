// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for full-stack development skills
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// ----------------------------------------------------------------------------

// Full-stack Development Skills -----------------------------------------------
const Fullstack = () => (
  <div className = "row">

    <div className = "col-6">
      <h4>Web Frameworks</h4>
      <ul className = "list-group">
        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://nodejs.org/en/">
              <FontAwesomeIcon icon = {['fab', 'node']} />
              &nbsp;NodeJS
            </a>
          </p>
        </li>
        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://webpack.js.org/">
              <FontAwesomeIcon icon = "dice-d6" />
              &nbsp;Webpack
            </a>
          </p>
        </li>
        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "http://flask.pocoo.org/">
              Flask
            </a>
          </p>
        </li>
        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://electronjs.org/">
              <FontAwesomeIcon icon = {['fab', 'react']} />
              &nbsp;Electron
            </a>
          </p>
        </li>
        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://www.meteor.com/">
              Meteor
            </a>
          </p>
        </li>
      </ul>
    </div>

    <div className = "col-6">
      <h4>Database Packages</h4>
      <ul className = "list-group">
        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://www.mysql.com/">
              MySQL
            </a>
          </p>
        </li>
        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://www.sqlite.org/index.html">
              SQLite
            </a>
          </p>
        </li>
        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://www.postgresql.org/">
              PostgreSQL
            </a>
          </p>
        </li>
        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://www.mongodb.com/">
              MongoDB
            </a>
          </p>
        </li>
      </ul>
    </div>

  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Fullstack;
// ----------------------------------------------------------------------------
