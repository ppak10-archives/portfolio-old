// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Reducer for todo list visibility filter
// ----------------------------------------------------------------------------

// Action Import --------------------------------------------------------------
import { VisibilityFilters } from '../actions'
// ----------------------------------------------------------------------------

// Visibility Filter Reducer --------------------------------------------------
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
// ----------------------------------------------------------------------------

// Reduer Export --------------------------------------------------------------
export default visibilityFilter
// ----------------------------------------------------------------------------
