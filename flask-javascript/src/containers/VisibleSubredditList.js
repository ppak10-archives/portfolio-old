// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Container for Redux visible subreddit list
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { connect } from 'react-redux'
// ----------------------------------------------------------------------------

// Actions Import -------------------------------------------------------------
import { toggleSubreddit }  from '../actions'
import { VisibilityFilters } from '../actions'
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import SubredditList from '../components/SubredditList'
// ----------------------------------------------------------------------------

// Visible Subreddit List Container -------------------------------------------
const getVisibleSubreddits = (subreddits, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return subreddits
    case VisibilityFilters.SHOW_VIEWING:
      return subreddits.filter(t => t.viewing)
    case VisibilityFilters.SHOW_HIDING:
      return subreddits.filter(t => !t.viewing)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
// ----------------------------------------------------------------------------

// Map to Props ---------------------------------------------------------------
const mapStateToProps = state => ({
  subreddits: getVisibleSubreddits(state.subreddits, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleSubreddit: id => dispatch(toggleSubreddit(id))
})
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditList)
// ----------------------------------------------------------------------------
