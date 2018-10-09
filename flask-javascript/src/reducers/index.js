// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script containing Redux reducers
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import { combineReducers } from 'redux';
// ----------------------------------------------------------------------------

// Reducer Imports ------------------------------------------------------------
import test from './test';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import subreddits from './subreddits';
import subredditVisibilityFilter from './subredditVisibilityFilter';
import postsBySubreddit from './postsBySubreddit';
import selectedSubreddit from './selectedSubreddit';
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
export default rootReducer
// ----------------------------------------------------------------------------
