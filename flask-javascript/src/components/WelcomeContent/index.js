// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for welcome page content
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Subreddit Posts Component --------------------------------------------------
const WelcomeContent = () => (
  <div className="accordion" id="welcomeAccordion">

    <div className="card">

      <div className="card-header" id="headingOne">
        <h3 className="mb-0">
          <button className="btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne">
            Programming
          </button>
        </h3>
      </div>

      <div id="collapseOne" className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#welcomeAccordion">
        <div className="card-body">
          <ul>

            <li>
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

            <li>
              <p>
                Cryptocurrency Arbitrage Bot – Developed an arbitrage trading
                bot for 08-303 term project which was able to successfully
                perform trades
              </p>
            </li>

            <li>
              <p>
                HackAuton – Developed a data processor for machine learning
                model to predict equipment failures for CMU’s HackAuton
              </p>
            </li>

            <li>
              <p>
                Electron Database Reader – Created a user environment to read
                market data built through Electron for cryptocurrency research
                project
              </p>
            </li>

            <li>
              <p>
                PHP Database Reader – Developed a sqlite database reader to
                view collected exchange data for cryptocurrency research
                project
              </p>
            </li>

          </ul>
        </div>
      </div>

    </div>

    <div className="card">

      <div className="card-header" id="headingTwo">
        <h3 className="mb-0">
          <button className="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo">
            Materials Science and Engineering
          </button>
        </h3>
      </div>

      <div id="collapseTwo" className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#welcomeAccordion">
        <div className="card-body">
          <ul>

            <li>
              <p>
                Instruments – Scanning Electron Microscope, X-ray Diffraction,
                Atomic Force Microscopy, Optical Microscopy
              </p>
            </li>

            <li>
              <p>
                Operations – Tube furnace operations, Soldering, Brazing,
                Polishing, Etching, Carpentry, Metalworking
              </p>
            </li>

            <li>
              <p>
                Programs – CES, FactSage, ThermoCalc
              </p>
            </li>

          </ul>
        </div>
      </div>

    </div>

    <div className="card">

      <div className="card-header" id="headingThree">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree">
            Front-end / Full-stack Development
          </button>
        </h5>
      </div>

      <div id="collapseThree" className="collapse"
        aria-labelledby="headingThree"
        data-parent="#welcomeAccordion">
        <div className="card-body">
          <ul>

            <li>
              <p>
                WebApp Frameworks – NodeJS, Meteor, Electron, Flask
              </p>
            </li>

            <li>
              <p>
                UI – HTML5, CSS, Bootstrap, React, Redux, Sass, D3, WebGL,
                PHP7, Jinja2, Kivy, Tkinter
              </p>
            </li>

            <li>
              <p>
                Database Packages – MySQL, SQLite3, PostgreSQL, MongoDB
              </p>
            </li>

            <li>
              <p>
                Other Unmentioned Languages – C, C#, C++, MATLAB, Visual Basic
              </p>
            </li>

          </ul>
        </div>
      </div>

    </div>

    <div className="card">

      <div className="card-header" id="headingFour">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour">
            Other Skills
          </button>
        </h5>
      </div>

      <div id="collapseFour" className="collapse"
        aria-labelledby="headingFour"
        data-parent="#welcomeAccordion">
        <div className="card-body">
          <ul>

            <li>
              <p>
                3D Design - Unity, Blender, AutoCAD, SolidWorks
              </p>
            </li>

          </ul>
        </div>
      </div>

    </div>

  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default WelcomeContent
// ----------------------------------------------------------------------------
