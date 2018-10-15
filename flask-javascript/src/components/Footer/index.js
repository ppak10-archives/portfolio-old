// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Footer component
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// ----------------------------------------------------------------------------

// Footer Component -----------------------------------------------------------
const Footer = () => (
  <div className = "text-center footer">
    <h1>
      <a target = "_blank" rel="noopener noreferrer"
        href = "https://www.github.com/ppak10">
        <FontAwesomeIcon icon = {['fab', 'github']} />
      </a>
      &nbsp;-&nbsp;
      <a target = "_blank" rel="noopener noreferrer"
        href = "http://www.linkedin.com/in/ppak10">
        <FontAwesomeIcon icon = {['fab', 'linkedin']} />
      </a>
      &nbsp;-&nbsp;
      <a target = "_blank" rel="noopener noreferrer"
        href = "http://www.whatispeterdoingrightnow.com">
        WhatIsPeterDoingRightNow.com
      </a>
    </h1>
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Footer
// ----------------------------------------------------------------------------
