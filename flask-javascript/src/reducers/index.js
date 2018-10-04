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
import visibilityFilter from './visibilityFilter.js'
// ----------------------------------------------------------------------------

// Reducers Export ------------------------------------------------------------
export default combineReducers({
  test,
  todos,
  visibilityFilter
})
// ----------------------------------------------------------------------------
