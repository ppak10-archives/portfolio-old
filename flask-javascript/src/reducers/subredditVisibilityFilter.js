// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for subreddit visibility filter reducer
// ----------------------------------------------------------------------------

// Action Import --------------------------------------------------------------
import { SubredditVisibilityFilters } from '../actions/index.js'
// ----------------------------------------------------------------------------

// Subreddit Visibility Filter Reducer ----------------------------------------
const subredditVisibilityFilter =
  (state = SubredditVisibilityFilters.SHOW_ALL_SUBREDDITS, action) => {
  switch (action.type) {
    case 'SET_SUBREDDIT_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
// ----------------------------------------------------------------------------

// Reducer Export -------------------------------------------------------------
export default subredditVisibilityFilter
// ----------------------------------------------------------------------------
