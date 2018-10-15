// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component layout for Redux subreddits example page
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import SubredditFilter from '../components/SubredditFilter';
// ----------------------------------------------------------------------------

// Container Imports ----------------------------------------------------------
import AddSubreddit from '../containers/AddSubreddit';
import VisibleSubredditList from '../containers/VisibleSubredditList';
import MultiSubreddits from '../containers/MultiSubreddits';
// ----------------------------------------------------------------------------

// Redux Todo Page ------------------------------------------------------------
const Subreddits = () => (
  <div className = "col page">
    <AddSubreddit />
    <VisibleSubredditList />
    <SubredditFilter />
    <MultiSubreddits />
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Subreddits;
// ----------------------------------------------------------------------------
