// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for Redux todo item
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types'
// ----------------------------------------------------------------------------

// Todo Component -------------------------------------------------------------
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Todo
// ----------------------------------------------------------------------------
