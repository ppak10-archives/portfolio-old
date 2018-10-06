// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Container for asynchronous subreddit scraper
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';                                       // Imports component for class to extend
import PropTypes from 'prop-types';                                             // Imports proptypes to verify props
import { connect } from 'react-redux'                                           // Imports connect to access store
// ----------------------------------------------------------------------------

// Actions Import -------------------------------------------------------------
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from '../actions'
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import Picker from '../components/Picker'
import Posts from '../components/Posts'
// ----------------------------------------------------------------------------

// Subreddit Scraper Container ------------------------------------------------
class SubredditScraper extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = this.props
      dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit))
    this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  render() {

    const {
      subreddits,
      selectedSubreddit,
      posts,
      isFetching,
      lastUpdated
    } = this.props

    return (
      <div>

        { /* Subreddit Picker */ }
        <Picker
          value = { selectedSubreddit }
          onChange = { this.handleChange }
          options = { subreddits }
        />

        { /* Fetch Status */ }
        <p>
          {lastUpdated &&
            <span>
              Last updated at { new Date(lastUpdated).toLocaleTimeString() }.
              {' '}
            </span>}
          {!isFetching &&
            <button onClick = { this.handleRefreshClick }>
              Refresh
            </button>}
        </p>

        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>}
      </div>
    )
  }
}
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
SubredditScraper.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}
// ----------------------------------------------------------------------------

// Map Props ------------------------------------------------------------------
function mapStateToProps(state) {
  let { selectedSubreddit } = state                                             // Let variable to allow for reassignment
  const { subreddits, postsBySubreddit } = state
  selectedSubreddit = selectedSubredditCheck(subreddits, selectedSubreddit)     // Function call to check selected subreddit
  const { isFetching, lastUpdated, items: posts } =
    postsBySubreddit[selectedSubreddit] || { isFetching: true, items: [] }

  return {
    subreddits,
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

function selectedSubredditCheck(subreddits, selectedSubreddit){                 // Function to check selected subreddit state
  if (selectedSubreddit === "") {                                               // If selected subreddit state is empty string
    return subreddits[0].name                                                   // Return first subreddit preset
  } else {                                                                      // If not empty string
    return selectedSubreddit                                                    // Return selected subreddit prop value
  }                                                                             // Note: Selected subreddit is still empty
}                                                                               // until dispatch fired
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default connect(mapStateToProps) (SubredditScraper)
// ----------------------------------------------------------------------------
