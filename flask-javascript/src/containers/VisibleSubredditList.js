// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Container for Redux visible subreddit list
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { connect } from 'react-redux'
// ----------------------------------------------------------------------------

// Actions Import -------------------------------------------------------------
import { toggleTodo }  from '../actions/index.js'
import { VisibilityFilters } from '../actions/index.js'
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import SubredditList from '../components/SubredditList'
// ----------------------------------------------------------------------------

// Visible Subreddit List Container -------------------------------------------
const getVisibleSubreddits = (todos, filter) => {
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
  todos: getVisibleSubreddits(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditList)
// ----------------------------------------------------------------------------
