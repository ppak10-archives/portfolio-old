// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script containing selected subreddit reducer
// ----------------------------------------------------------------------------

// Action Imports -------------------------------------------------------------
import { SELECT_SUBREDDIT } from '../actions'
// ----------------------------------------------------------------------------

// Export Reducer -------------------------------------------------------------
export default function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}
// ----------------------------------------------------------------------------
