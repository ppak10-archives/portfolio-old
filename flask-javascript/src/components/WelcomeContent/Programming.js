// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for programming skills
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// ----------------------------------------------------------------------------

// Programming Skills ---------------------------------------------------------
const Programming = () => (
  <div className = "row">
    <div className = "col-2">
      <h4>Languages</h4>
      <ul className = "list-group">

        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://www.python.org/">
              <FontAwesomeIcon icon = {['fab', 'python']} />
              &nbsp;Python
            </a>
          </p>
        </li>

        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <FontAwesomeIcon icon = {['fab', 'js-square']} />
              &nbsp;JavaScript
            </a>
          </p>
        </li>

        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://www.mathworks.com/products/matlab.html">
              <FontAwesomeIcon icon = {['fab', 'empire']} />
              &nbsp;MATLAB
            </a>
          </p>
        </li>

        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "http://www.php.net/">
              <FontAwesomeIcon icon = {['fab', 'php']} />
              &nbsp;PHP
            </a>
          </p>
        </li>

        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://developer.mozilla.org/en-US/docs/Web/HTML">
              <FontAwesomeIcon icon = {['fab', 'html5']} />
              &nbsp;HTML
            </a>
          </p>
        </li>

        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://developer.mozilla.org/en-US/docs/Web/CSS">
              <FontAwesomeIcon icon = {['fab', 'css3']} />
              &nbsp;CSS
            </a>
          </p>
        </li>

        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://docs.microsoft.com/en-us/dotnet/csharp/">
              C#
            </a>
          </p>
        </li>

        <li className = "list-group-item list-group-item-light">
          <p>
            <a target = "_blank" rel="noopener noreferrer"
              href = "https://docs.microsoft.com/en-us/dotnet/visual-basic/">
              Visual Basic
            </a>
          </p>
        </li>

      </ul>
    </div>
    <div className = "col-10">
      <h4>Projects</h4>
      <ul className = "list-group">

        <li className = "list-group-item list-group-item-light">
          <p>
            <span>
              <a target = "_blank" rel="noopener noreferrer"
                href = "https://www.youtube.com/watch?v=uuUbdluqSiE&t=7s">
                3D Graphics in Tkinter
              </a>
            </span>
            &nbsp;- Created a 3D environment with python’s Tkinter package
            for 15-112 term project and was selected to present
          </p>
        </li>

        <li className = "list-group-item list-group-item-light">
          <p>
            Cryptocurrency Arbitrage Bot – Developed an arbitrage trading
            bot for 08-303 term project which was able to successfully
            perform trades
          </p>
        </li>

        <li className = "list-group-item list-group-item-light">
          <p>
            HackAuton – Developed a data processor for machine learning
            model to predict equipment failures for CMU’s HackAuton
          </p>
        </li>

        <li className = "list-group-item list-group-item-light">
          <p>
            Electron Database Reader – Created a user environment to read
            market data built through Electron for cryptocurrency research
            project
          </p>
        </li>

        <li className = "list-group-item list-group-item-light">
          <p>
            PHP Database Reader – Developed a sqlite database reader to
            view collected exchange data for cryptocurrency research
            project
          </p>
        </li>

      </ul>
    </div>
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Programming
// ----------------------------------------------------------------------------
