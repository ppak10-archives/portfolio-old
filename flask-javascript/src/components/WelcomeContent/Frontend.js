// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for front-end development skills
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// ----------------------------------------------------------------------------

// Front-end Development Skills -----------------------------------------------
const Frontend = () => (
  <div>
    <h3>Libraries</h3>
    <div className = "row">

      <div className = "col-2">
        <h4>Rendering</h4>
        <ul className = "list-group">
          <li className = "list-group-item list-group-item-light">
            <p>
              <a target = "_blank" rel="noopener noreferrer"
                href = "https://reactjs.org/">
                <FontAwesomeIcon icon = {['fab', 'react']} />
                &nbsp;React
              </a>
            </p>
          </li>
        </ul>
      </div>

      <div className = "col-2">
        <h4>State Management</h4>
        <ul className = "list-group">
          <li className = "list-group-item list-group-item-light">
            <p>
              <a target = "_blank" rel="noopener noreferrer"
                href = "https://redux.js.org/">
                Redux
              </a>
            </p>
          </li>
        </ul>
      </div>

      <div className = "col-2">
        <h4>Styling</h4>
        <ul className = "list-group">
          <li className = "list-group-item list-group-item-light">
            <p>
              <a target = "_blank" rel="noopener noreferrer"
                href = "https://getbootstrap.com/">
                Bootstrap
              </a>
            </p>
          </li>
          <li className = "list-group-item list-group-item-light">
            <p>
              <a target = "_blank" rel="noopener noreferrer"
                href = "https://sass-lang.com/">
                <FontAwesomeIcon icon = {['fab', 'sass']} />
                &nbsp;Sass
              </a>
            </p>
          </li>
          <li className = "list-group-item list-group-item-light">
            <p>
              <a target = "_blank" rel="noopener noreferrer"
                href = "http://lesscss.org/">
                <FontAwesomeIcon icon = {['fab', 'less']} />
                &nbsp;Less
              </a>
            </p>
          </li>
        </ul>
      </div>

      <div className = "col-6">
        <h4>Visualization</h4>
        <ul className = "list-group">

          <li className = "list-group-item list-group-item-light">
            <p>
              <a target = "_blank" rel="noopener noreferrer"
                href = "https://threejs.org/">
                three.js
              </a>
            </p>
          </li>

          <li className = "list-group-item list-group-item-light">
            <p>
              <a target = "_blank" rel="noopener noreferrer"
                href = "https://d3js.org/">
                D3
              </a>
            </p>
          </li>

          <li className = "list-group-item list-group-item-light">
            <p>
              <a target = "_blank" rel="noopener noreferrer"
                href = "https://kivy.org/#home">
                Kivy
              </a>
            </p>
          </li>

          <li className = "list-group-item list-group-item-light">
            <p>
              <a target = "_blank" rel="noopener noreferrer"
                href = "https://docs.python.org/3/library/tkinter.html">
                Tkinter
              </a>
            </p>
          </li>

        </ul>
      </div>
    </div>
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Frontend;
// ----------------------------------------------------------------------------
