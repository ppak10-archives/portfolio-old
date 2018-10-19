// ----------------------------------------------------------------------------
// Original Creator: Bootstrap
// File Developer: Peter Pak
// Description: Component for skills page content
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
const SkillsContent = () => (
  <div className="accordion" id="welcomeAccordion">

    <div className="card text-white skills-bg">

      <div className="card-header collapse-header btn btn-link"
        id="headingOne"
        data-toggle="collapse"
        data-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne">
        <h2>
          <FontAwesomeIcon icon = "code" />
          &nbsp;Programming
        </h2>

      </div>

      <div id="collapseOne" className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#welcomeAccordion">
        <div className="card-body">
          <Programming />
        </div>
      </div>

    </div>

    <div className="card text-white skills-bg">

      <div className="card-header collapse-header btn btn-link collapsed"
        id="headingTwo"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo">
        <h2>
          <FontAwesomeIcon icon = "atom" />
          &nbsp;Materials Science and Engineering
        </h2>
      </div>

      <div id="collapseTwo" className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#welcomeAccordion">
        <div className="card-body">
          <MSE />
        </div>
      </div>

    </div>

    <div className="card text-white skills-bg">

      <div className="card-header collapse-header btn btn-link collapsed"
        id="headingThree"
        data-toggle="collapse"
        data-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree">
        <h2>
          <FontAwesomeIcon icon = "object-group" />
          &nbsp;Front-end Development
        </h2>
      </div>

      <div id="collapseThree" className="collapse"
        aria-labelledby="headingThree"
        data-parent="#welcomeAccordion">
        <div className="card-body">
          <Frontend />
        </div>
      </div>

    </div>


    <div className="card text-white skills-bg">

      <div className="card-header collapse-header btn btn-link collapsed"
        id="headingFour"
        data-toggle="collapse"
        data-target="#collapseFour"
        aria-expanded="false"
        aria-controls="collapseFour">
        <h2>
          <FontAwesomeIcon icon = "server" />
          &nbsp;Full-stack Development
        </h2>
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
export default SkillsContent
// ----------------------------------------------------------------------------
