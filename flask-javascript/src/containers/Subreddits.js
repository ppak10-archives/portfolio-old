// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Component for displaying subreddits
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';                                       // Imports component for class to extend
import PropTypes from 'prop-types';                                             // Imports proptypes to verify props
import { connect } from 'react-redux'                                           // Imports connect to access store
// ----------------------------------------------------------------------------

// Container Import -----------------------------------------------------------
import SubredditScraper from './SubredditScraper';
// ----------------------------------------------------------------------------

// Subreddit Scraper Container ------------------------------------------------
class Subreddits extends Component {

  render() {

    const { subreddits } = this.props

    return (
      <div className = "row">
        { subreddits.map(subreddit =>
          <div className = "col">
            <SubredditScraper subredditName = { subreddit.name }/>
          </div>
        ) }
      </div>
    )
  }
}
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
SubredditScraper.propTypes = {
  subreddits: PropTypes.array.isRequired
}
// ----------------------------------------------------------------------------

// Map Props ------------------------------------------------------------------
function mapStateToProps(state) {
  const { subreddits } = state                                                  // Declares state variables to const for props
  return { subreddits }
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default connect(mapStateToProps) (Subreddits)
// ----------------------------------------------------------------------------
