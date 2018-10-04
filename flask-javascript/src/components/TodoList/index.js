// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for Redux todo list
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types'
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import Todo from '../Todo'
// ----------------------------------------------------------------------------

// Todo List Component --------------------------------------------------------
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default TodoList
// ----------------------------------------------------------------------------
