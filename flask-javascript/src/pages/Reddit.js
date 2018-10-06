// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component layout for subreddit scraper page
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
import SubredditScraper from '../containers/SubredditScraper';
// ----------------------------------------------------------------------------

// Redux Todo Page ------------------------------------------------------------
const Reddit = () => (
  <div className = "col">
    <AddSubreddit />
    <VisibleSubredditList />
    <SubredditFilter />
    <SubredditScraper />
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Reddit;
// ----------------------------------------------------------------------------
