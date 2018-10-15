// ----------------------------------------------------------------------------
// Original Creator: Bootstrap
// File Developer: Peter Pak
// Description: Component for welcome page content
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

      <div className="card-header collapse-header" id="headingOne">
        <a className="btn btn-link"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne">
          <FontAwesomeIcon icon = "code" />
          &nbsp;Programming
        </a>
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

      <div className="card-header collapse-header" id="headingTwo">
        <a className="btn btn-link collapsed"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo">
          <FontAwesomeIcon icon = "atom" />
          &nbsp;Materials Science and Engineering
        </a>
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

      <div className="card-header collapse-header" id="headingThree">
        <a className="btn btn-link collapsed"
          data-toggle="collapse"
          data-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree">
          <FontAwesomeIcon icon = "object-group" />
          &nbsp;Front-end Development
        </a>
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

      <div className="card-header collapse-header" id="headingFour">
        <a className="btn btn-link collapsed"
          data-toggle="collapse"
          data-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour">
          <FontAwesomeIcon icon = "server" />
          &nbsp;Full-stack Development
        </a>
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
