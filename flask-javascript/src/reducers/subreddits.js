// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for subreddit button reducer
// ----------------------------------------------------------------------------

// Todos Reducer --------------------------------------------------------------
const subreddits = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SUBREDDIT_BUTTON':
      return [
        ...state,
        {
          id: action.id,
          name: action.subredditName,
          viewing: true
        }
      ]
    case 'TOGGLE_SUBREDDIT':
      return state.map(subreddit =>
        (subreddit.id === action.id)
          ? {...subreddit, viewing: !subreddit.viewing}
          : subreddit
      )
    default:
      return state
  }
}
// ----------------------------------------------------------------------------

// Reducer Exports ------------------------------------------------------------
export default subreddits
// ----------------------------------------------------------------------------
