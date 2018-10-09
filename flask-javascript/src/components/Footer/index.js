// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Component for todo list footer
// ----------------------------------------------------------------------------

// Module Import --------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Container Import -----------------------------------------------------------
import FilterLink from '../../containers/FilterLink';
// ----------------------------------------------------------------------------

// Action Import --------------------------------------------------------------
import { VisibilityFilters } from '../../actions';
// ----------------------------------------------------------------------------

// Footer Component -----------------------------------------------------------
const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter = { VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter = { VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter = { VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Footer
// ----------------------------------------------------------------------------
