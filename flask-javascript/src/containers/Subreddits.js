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
        { subreddits.map(subreddit =>                                           // Maps through list of subreddits in state
          {
            if (subreddit.viewing == true )                                     // If subreddit viewing stat is true
            {
              return(                                                           // Return subreddit scraper container
                <div className = "col">
                  <SubredditScraper subreddit = { subreddit }/>
                </div>
              )
            }
          }
        )}
      </div>
    )
  }
}
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
SubredditScraper.propTypes = {
  subreddits: PropTypes.array.isRequired                                        // Require subreddits state in prop type
}
// ----------------------------------------------------------------------------

// Map Props ------------------------------------------------------------------
function mapStateToProps(state) {                                               // Map state to props for use in class
  const { subreddits } = state                                                  // Declare subreddits state to props
  return { subreddits }
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default connect(mapStateToProps) (Subreddits)
// ----------------------------------------------------------------------------
