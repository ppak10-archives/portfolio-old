// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component header for welcome page
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
// ----------------------------------------------------------------------------

// Subreddit Posts Component --------------------------------------------------
const WelcomeHeader = () => (
  <div className = "text-center">
    <Link to = "/about">
      <img className = "rounded-circle profile-border"
        src = "./static/images/welcome.jpg" />
    </Link>
    <h1 className = "profile-name">Peter Pak</h1>
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default WelcomeHeader
// ----------------------------------------------------------------------------
