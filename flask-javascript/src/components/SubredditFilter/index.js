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
import { SubredditVisibilityFilters } from '../../actions';
// ----------------------------------------------------------------------------

// Footer Component -----------------------------------------------------------
const SubredditFilter = () => (
  <div>
    <FilterLink filter = { SubredditVisibilityFilters.SHOW_ALL_SUBREDDITS }>
      All
    </FilterLink>
    <FilterLink filter = { SubredditVisibilityFilters.SHOW_VIEWING }>
      Viewing
    </FilterLink>
    <FilterLink filter = { SubredditVisibilityFilters.SHOW_HIDING }>
      Hiding
    </FilterLink>
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default SubredditFilter
// ----------------------------------------------------------------------------
