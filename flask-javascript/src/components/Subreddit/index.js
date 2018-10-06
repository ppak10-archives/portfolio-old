// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Component for subreddit button
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
// ----------------------------------------------------------------------------

// Todo Component -------------------------------------------------------------
const Subreddit = ({ onClick, completed, text }) => (
  <li className = "list-inline-item">
    <button className = "btn btn-success" onClick = { onClick }
      disabled = { completed }>
      { text }
    </button>
  </li>
)
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
Subreddit.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Subreddit;
// ----------------------------------------------------------------------------
