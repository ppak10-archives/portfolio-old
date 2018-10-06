// ----------------------------------------------------------------------------
// Orignal Creator: Redux
// File Developer: Peter Pak
// Description: Component for Redux todo item link
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types'
// ----------------------------------------------------------------------------

// Link Component -------------------------------------------------------------
const Link = ({ active, children, onClick }) => (
  <button className = "btn btn-secondary"
     onClick = { onClick }
     disabled = { active }
     style={{
         marginLeft: '4px',
     }}
  >
    { children }
  </button>
)
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Link
// ----------------------------------------------------------------------------
