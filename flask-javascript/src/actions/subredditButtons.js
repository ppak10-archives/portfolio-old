// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for subreddit button actions
// ----------------------------------------------------------------------------

// Subreddit Button Actions ---------------------------------------------------
let nextSubredditId = 0

export const addSubredditButton = subredditName => ({
  type: 'ADD_SUBREDDIT_BUTTON',
  id: nextSubredditId++,
  subredditName
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleSubreddit = id => ({
  type: 'TOGGLE_SUBREDDIT',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_VIEWING: 'SHOW_VIEWING',
  SHOW_HIDING: 'SHOW_HIDING'
}
// ----------------------------------------------------------------------------
