// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script containing Redux reducers
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import { combineReducers } from 'redux';
// ----------------------------------------------------------------------------

// Reducer Imports ------------------------------------------------------------
import test from './test.js';
import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';
import postsBySubreddit from './postsBySubreddit.js';
import selectedSubreddit from './selectedSubreddit.js';
// ----------------------------------------------------------------------------

// Root Reducer ---------------------------------------------------------------
const rootReducer = combineReducers({
  test,
  todos,
  visibilityFilter,
  postsBySubreddit,
  selectedSubreddit
})
// ----------------------------------------------------------------------------

// Root Reducer Export --------------------------------------------------------
export default rootReducer
// ----------------------------------------------------------------------------
