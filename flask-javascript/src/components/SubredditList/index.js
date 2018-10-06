// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Component for subreddit list
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types'
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import Subreddit from '../Subreddit'
// ----------------------------------------------------------------------------

// Todo List Component --------------------------------------------------------
const SubredditList = ({ todos, toggleTodo }) => (
  <ul className = "list-inline">
    {todos.map(todo =>
      <Subreddit
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
SubredditList.propTypes = {
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
export default SubredditList
// ----------------------------------------------------------------------------
