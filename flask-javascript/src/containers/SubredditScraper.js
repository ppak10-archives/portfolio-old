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
    const { dispatch, subredditName } = this.props
    dispatch(fetchPostsIfNeeded(subredditName))
  }

  componentDidUpdate(prevProps) {
    if (this.props.subredditName !== prevProps.subredditName) {
      const { dispatch, subredditName } = this.props
      dispatch(fetchPostsIfNeeded(subredditName))
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit))
    this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, subredditName } = this.props
    dispatch(invalidateSubreddit(subredditName))
    dispatch(fetchPostsIfNeeded(subredditName))
  }

  render() {

    const {
      subredditName,
      subreddits,
      posts,
      isFetching,
      lastUpdated
    } = this.props

    return (

      <div>
        <h1>/r/{ subredditName }</h1>

        { /* Fetch Success */ }
        <p>
          { lastUpdated &&
            <span>
              Last updated at { new Date(lastUpdated).toLocaleTimeString() }.
              {' '}
            </span> }
          { !isFetching &&
            <button className = "btn btn-info" onClick = {
              this.handleRefreshClick
            }>
              Refresh
            </button> }
        </p>

        { isFetching && posts.length === 0 && <h2>Loading...</h2> }
        { !isFetching && posts.length === 0 && <h2>Empty.</h2> }
        { posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={ posts } />
          </div> }
      </div>
    )
  }
}
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
SubredditScraper.propTypes = {
  subredditName: PropTypes.string.isRequired,
  subreddits: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}
// ----------------------------------------------------------------------------

// Map Props ------------------------------------------------------------------
function mapStateToProps(state, ownProps) {
  const { subreddits, postsBySubreddit } = state                                // Declares state variables to const for props
  const { isFetching, lastUpdated, items: posts } =
    postsBySubreddit[ownProps.subredditName] || { isFetching: true, items: [] }

  return {
    subreddits,
    posts,
    isFetching,
    lastUpdated
  }
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default connect(mapStateToProps) (SubredditScraper)
// ----------------------------------------------------------------------------
