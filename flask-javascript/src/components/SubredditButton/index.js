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
const SubredditButton = ({ onClick, viewing, name }) => (
  <li className = "list-inline-item">
    <button className = "btn btn-success" onClick = { onClick }
      disabled = { viewing }>
      { name }
    </button>
  </li>
)
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
SubredditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  viewing: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default SubredditButton;
// ----------------------------------------------------------------------------
