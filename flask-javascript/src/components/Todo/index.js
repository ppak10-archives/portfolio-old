// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for Todo Component
// ----------------------------------------------------------------------------

// Module Import --------------------------------------------------------------
import React from 'react'                                                       // Import react module for component
import PropTypes from 'prop-types'                                              // Import prop types for checks
// ----------------------------------------------------------------------------

// Todo Component -------------------------------------------------------------
const Todo = ({ onClick, completed, text }) => (                                // Todo component to hold single todo item

  /* Todo Item */
  <li onClick = { onClick } style = { {
    textDecoration: completed ? 'line-through' : 'none'
  } }>
    { text }
  </li>
)
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
Todo.propTypes = {                                                              // Prop types check for todo component
  onClick: PropTypes.func.isRequired,                                           // On click prop must be a function
  completed: PropTypes.bool.isRequired,                                         // Completed prop must be a boolean
  text: PropTypes.string.isRequired                                             // Text prop must be a string
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Todo                                                             // Export todo component
// ----------------------------------------------------------------------------
