// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script containing Redux reducers
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import { combineReducers } from 'redux';                                        // Import combine reducers module
// ----------------------------------------------------------------------------

// Reducer Imports ------------------------------------------------------------
import test from './test';                                                      // Import test reducer
import todos from './todos';                                                    // Import todos reducer
import visibilityFilter from './visibilityFilter';                              // Import visibility filter reducer
import subreddits from './subreddits';                                          // Import subreddits reducer
import subredditVisibilityFilter from './subredditVisibilityFilter';            // Import subreddit visibility filter reducer
import postsBySubreddit from './postsBySubreddit';                              // Import posts by subreddit reducer
import selectedSubreddit from './selectedSubreddit';                            // Import selected subreddit reducer
// ----------------------------------------------------------------------------

// Root Reducer ---------------------------------------------------------------
// Reducers here provide the list of keys that are kept in the state
// i.e. raw state data would look something like this:
// {
//  test: {},
//  subreddits: [],
//  subredditVisibilityFilter: 'SHOW_ALL_SUBREDDITS',
//  etc...
// }

const rootReducer = combineReducers({
  test,
  todos,
  visibilityFilter,
  subreddits,
  subredditVisibilityFilter,
  postsBySubreddit,
  selectedSubreddit
})
// ----------------------------------------------------------------------------

// Root Reducer Export --------------------------------------------------------
export default rootReducer                                                      // Export root reducer 
// ----------------------------------------------------------------------------
