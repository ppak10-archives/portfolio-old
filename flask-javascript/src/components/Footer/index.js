// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Component for todo list footer
// ----------------------------------------------------------------------------

// Module Import --------------------------------------------------------------
import React from 'react';                                                      // Import react for component
// ----------------------------------------------------------------------------

// Container Import -----------------------------------------------------------
import FilterLink from '../../containers/FilterLink';                           // Import filter link container
// ----------------------------------------------------------------------------

// Action Import --------------------------------------------------------------
import { VisibilityFilters } from '../../actions';                              // Import visibility filter types
// ----------------------------------------------------------------------------

// Footer Component -----------------------------------------------------------
const Footer = () => (                                                          // Create stateless filter component
  <div>
    <span>Show: </span>

    { /* Show All Todos Filter */ }
    <FilterLink filter = { VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>

    { /* Show Active Todos Filter */ }
    <FilterLink filter = { VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>

    { /* Show Completed Todos Filter */ }
    <FilterLink filter = { VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Footer                                                           // Export footer component
// ----------------------------------------------------------------------------
