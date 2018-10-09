// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Container for Redux visible subreddit list
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { connect } from 'react-redux'
// ----------------------------------------------------------------------------

// Actions Import -------------------------------------------------------------
import { toggleSubreddit , SubredditVisibilityFilters } from '../actions'       // Imports actions to dispatch later
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import SubredditList from '../components/SubredditList'
// ----------------------------------------------------------------------------

// Visible Subreddit List Container -------------------------------------------
const getVisibleSubreddits = (subreddits, filter) => {
  switch (filter) {
    case SubredditVisibilityFilters.SHOW_ALL_SUBREDDITS:
      return subreddits
    case SubredditVisibilityFilters.SHOW_VIEWING:
      return subreddits.filter(t => t.viewing)
    case SubredditVisibilityFilters.SHOW_HIDING:
      return subreddits.filter(t => !t.viewing)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
// ----------------------------------------------------------------------------

// Map to Props ---------------------------------------------------------------
const mapStateToProps = state => ({
  subreddits: getVisibleSubreddits(state.subreddits,
     state.subredditVisibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleSubreddit: id => dispatch(toggleSubreddit(id))                          // Creates function to dispatch toggle subreddit action
})
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditList)
// ----------------------------------------------------------------------------
