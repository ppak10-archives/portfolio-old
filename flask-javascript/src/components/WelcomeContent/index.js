// ----------------------------------------------------------------------------
// Original Creator: Bootstrap
// File Developer: Peter Pak
// Description: Component for welcome page content
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import Programming from './Programming';
import MSE from './MSE';
import Frontend from './Frontend';
import Fullstack from './Fullstack';
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
          <Programming />
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
          <MSE />
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
            Front-end Development
          </button>
        </h5>
      </div>

      <div id="collapseThree" className="collapse"
        aria-labelledby="headingThree"
        data-parent="#welcomeAccordion">
        <div className="card-body">
          <Frontend />
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
            Full-stack Development
          </button>
        </h5>
      </div>

      <div id="collapseFour" className="collapse"
        aria-labelledby="headingFour"
        data-parent="#welcomeAccordion">
        <div className="card-body">
          <Fullstack />
        </div>
      </div>

    </div>

  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default WelcomeContent
// ----------------------------------------------------------------------------
