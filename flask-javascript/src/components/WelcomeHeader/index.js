// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component header for welcome page
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Subreddit Posts Component --------------------------------------------------
const WelcomeHeader = () => (
  <div className = "text-center">
    <img className = "rounded-circle profile-border"
      src = "./static/images/welcome.jpg"
    />
    <h1 className = "profile-name">Peter Pak</h1>
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default WelcomeHeader
// ----------------------------------------------------------------------------
