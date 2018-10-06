// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for subreddit filter
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Container Imports ----------------------------------------------------------
import FilterLink from '../../containers/FilterLink';
// ----------------------------------------------------------------------------

// Action Import --------------------------------------------------------------
import { VisibilityFilters } from '../../actions';
// ----------------------------------------------------------------------------

// Footer Component -----------------------------------------------------------
const SubredditFilter = () => (
  <div>
    <FilterLink filter = { VisibilityFilters.SHOW_ALL }>
      All
    </FilterLink>
    <FilterLink filter = { VisibilityFilters.SHOW_VIEWING }>
      Viewing
    </FilterLink>
    <FilterLink filter = { VisibilityFilters.SHOW_HIDING }>
      Hiding
    </FilterLink>
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default SubredditFilter
// ----------------------------------------------------------------------------
