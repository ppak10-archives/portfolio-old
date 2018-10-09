// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for todo list component
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';                                                      // Import react module for component
import PropTypes from 'prop-types';                                             // Import prop types for checks
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import Todo from '../Todo';                                                     // Import todo component for todo item
// ----------------------------------------------------------------------------

// Todo List Component --------------------------------------------------------
const TodoList = ({ todos, toggleTodo }) => (                                   // Todo list component to hold todo items

  /* Todo List */
  <ul>
    {todos.map(todo =>
      <Todo key = { todo.id }
        { ...todo }
        onClick = { () => toggleTodo(todo.id)}
      />
    )}
  </ul>
)
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
TodoList.propTypes = {                                                          // Todo list prop types
  todos: PropTypes.arrayOf(                                                     // Todos props must be an array
    PropTypes.shape({                                                           // Todos array element prop must follow shape
      id: PropTypes.number.isRequired,                                          // Element id prop must be a number
      completed: PropTypes.bool.isRequired,                                     // Element completed prop must be a boolean
      text: PropTypes.string.isRequired                                         // Element text prop must be a string
    }).isRequired                                                               // Elements must follow mentioned shape
  ).isRequired,                                                                 // Todos props array is required
  toggleTodo: PropTypes.func.isRequired                                         // Toggle todo prop must be a function
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default TodoList                                                         // Export todo list component
// ----------------------------------------------------------------------------
