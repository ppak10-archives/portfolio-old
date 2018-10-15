// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for front-end development skills
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Front-end Development Skills -----------------------------------------------
const Frontend = () => (
  <div className = "row">
    <div className = "col-3">
      <h4>Frameworks</h4>
      <ul className = "list-group">

        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://www.python.org/">
              React
            </a>
          </p>
        </li>

        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              Redux
            </a>
          </p>
        </li>

      </ul>
    </div>
    <div className = "col-9">
      <h4>Visualization Frameworks</h4>
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
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Frontend;
// ----------------------------------------------------------------------------
