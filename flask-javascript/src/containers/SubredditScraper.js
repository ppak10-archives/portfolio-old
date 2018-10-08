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
  invalidateSubreddit,
  toggleSubreddit
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
    this.handleChange = this.handleChange.bind(this)                            // Binds handle change function to class
    this.handleRefreshClick = this.handleRefreshClick.bind(this)                // Binds handle refresh click function to class
    this.handleHideClick = this.handleHideClick.bind(this)                      // Binds handle hide click function to class
  }

  componentDidMount() {
    const { dispatch, subreddit } = this.props
    dispatch(fetchPostsIfNeeded(subreddit.name))
  }

  componentDidUpdate(prevProps) {
    if (this.props.subreddit.name !== prevProps.subreddit.name) {
      const { dispatch, subreddit } = this.props
      dispatch(fetchPostsIfNeeded(subreddit.name))
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit))
    this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, subreddit } = this.props
    dispatch(invalidateSubreddit(subreddit.name))
    dispatch(fetchPostsIfNeeded(subreddit.name))
  }

  handleHideClick(e) {
    e.preventDefault()

    const { dispatch, subreddit } = this.props
    dispatch(toggleSubreddit(subreddit.id))
  }

  render() {

    const {
      subreddit,
      subreddits,
      posts,
      isFetching,
      lastUpdated
    } = this.props

    return (

      <div>
        <h2>
          <button className = "btn btn-warning" onClick = {
            this.handleHideClick
          }>
            Hide
          </button>
          /r/{ subreddit.name }
        </h2>

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
          <div className = "scroll-container" style = {
            { opacity: isFetching ? 0.5 : 1 }
          }>
            <Posts posts={ posts } />
          </div> }
      </div>
    )
  }
}
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
SubredditScraper.propTypes = {
  subreddit: PropTypes.object.isRequired,
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
    postsBySubreddit[ownProps.subreddit.name] ||
      { isFetching: true, items: [] }

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
