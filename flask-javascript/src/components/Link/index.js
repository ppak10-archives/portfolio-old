// ----------------------------------------------------------------------------
// Orignal Creator: Redux
// File Developer: Peter Pak
// Description: Component for filter link button
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';                                                      // Import react for component
import PropTypes from 'prop-types'                                              // Import prop types for prop checks
// ----------------------------------------------------------------------------

// Link Component -------------------------------------------------------------
const Link = ({ active, children, onClick }) => (                               // Filter link button component

  /* Filter Button */
  <button className = "btn btn-secondary btn-lg"
     onClick = { onClick }
     disabled = { active }
  >
    { children }
  </button>
)
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
Link.propTypes = {                                                              // Component prop types check
  active: PropTypes.bool.isRequired,                                            // Active prop must be a boolean
  children: PropTypes.node.isRequired,                                          // Children prop must be a node
  onClick: PropTypes.func.isRequired                                            // On click prop must be a function
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Link                                                             // Export link component
// ----------------------------------------------------------------------------
