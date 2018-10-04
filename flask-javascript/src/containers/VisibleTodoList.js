// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Container for Redux visible todo list
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { connect } from 'react-redux'
// ----------------------------------------------------------------------------

// Actions Import -------------------------------------------------------------
import { toggleTodo }  from '../actions/index.js'
import { VisibilityFilters } from '../actions/index.js'
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import TodoList from '../components/TodoList'
// ----------------------------------------------------------------------------

// Visible Todo List Container ------------------------------------------------
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
// ----------------------------------------------------------------------------

// Map to Props ---------------------------------------------------------------
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
// ----------------------------------------------------------------------------
