// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for subreddit button reducer
// ----------------------------------------------------------------------------

// Initial State --------------------------------------------------------------
const initialState = [                                                          // Preset subreddits state
  { id: 0, name: "pics", viewing: true },                                       // Preset pics subreddit state
  { id: 1, name: "gifs", viewing: true },                                       // Preset gifs subreddit state
  { id: 2, name: "news", viewing: true }                                        // Preset news subreddit state
]
// ----------------------------------------------------------------------------

// Todos Reducer --------------------------------------------------------------
const subreddits = (state = initialState, action) => {
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
