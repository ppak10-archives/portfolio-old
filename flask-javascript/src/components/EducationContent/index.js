// ----------------------------------------------------------------------------
// Original Creator: Bootstrap
// File Developer: Peter Pak
// Description: Component for education page content
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import MSE from './MSE.js';
// ----------------------------------------------------------------------------

// Education Component --------------------------------------------------------
const EducationContent = () => (
  <div className="accordion" id="welcomeAccordion">
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
  </div>
);
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default EducationContent
// ----------------------------------------------------------------------------
