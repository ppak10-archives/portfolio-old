// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for subreddit filter
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Container Imports ----------------------------------------------------------
import FilterLink from '../../containers/FilterLink.js'
// ----------------------------------------------------------------------------

// Action Import --------------------------------------------------------------
import { VisibilityFilters } from '../../actions/index.js'
// ----------------------------------------------------------------------------

// Footer Component -----------------------------------------------------------
const SubredditFilter = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default SubredditFilter
// ----------------------------------------------------------------------------
