// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script containing Redux reducers
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import { combineReducers } from 'redux';
// ----------------------------------------------------------------------------

// Reducer Imports ------------------------------------------------------------
import test from './test.js';
import subreddits from './subreddits';
import visibilityFilter from './visibilityFilter.js';
import postsBySubreddit from './postsBySubreddit.js';
import selectedSubreddit from './selectedSubreddit.js';
// ----------------------------------------------------------------------------

// Root Reducer ---------------------------------------------------------------
// Reducers here provide the list of keys that are kept in the state
// i.e. raw state data would look something like this:
// {
//  test: {},
//  subreddits: [],
//  visibilityFilter: 'SHOW_ALL',
//  etc...
// }

const rootReducer = combineReducers({
  test,
  subreddits,
  visibilityFilter,
  postsBySubreddit,
  selectedSubreddit
})
// ----------------------------------------------------------------------------

// Root Reducer Export --------------------------------------------------------
export default rootReducer
// ----------------------------------------------------------------------------
