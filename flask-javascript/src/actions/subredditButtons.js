// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for subreddit button actions
// ----------------------------------------------------------------------------

// Subreddit Button Actions ---------------------------------------------------
let nextSubredditId = 3                                                         // Magic number considering 3 present subreddits

export const addSubredditButton = subredditName => ({
  type: 'ADD_SUBREDDIT_BUTTON',
  id: nextSubredditId++,
  subredditName
})

export const setSubredditVisibilityFilter = filter => ({
  type: 'SET_SUBREDDIT_VISIBILITY_FILTER',
  filter
})

export const toggleSubreddit = id => ({
  type: 'TOGGLE_SUBREDDIT',
  id
})

export const SubredditVisibilityFilters = {
  SHOW_ALL_SUBREDDITS: 'SHOW_ALL_SUBREDDITS',
  SHOW_VIEWING: 'SHOW_VIEWING',
  SHOW_HIDING: 'SHOW_HIDING'
}
// ----------------------------------------------------------------------------
