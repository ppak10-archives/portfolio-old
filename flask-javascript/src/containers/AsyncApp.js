// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Container for asynchronous reddit app
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

// Component Import -----------------------------------------------------------
import Picker from '../components/Picker';
import Posts from '../components/RedditPosts';
// ----------------------------------------------------------------------------

// Subreddit Scraper Container ------------------------------------------------
class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)                            // Bind handle change function to this
    this.handleRefreshClick = this.handleRefreshClick.bind(this)                // Bind handle refresh click function to this
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
          options = {['reactjs', 'frontend']}
        />

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
            </button>
          }
        </p>

        { /* Fetching */ }
        { isFetching && posts.length === 0 && <h2>Loading...</h2> }

        { /* Empty Fetch */ }
        { !isFetching && posts.length === 0 && <h2>Empty.</h2> }

        { /* Fetched Posts */ }
        { posts.length > 0 &&
          <div style = {{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts = { posts } />
          </div>
        }
      </div>
    )
  }
}
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
AsyncApp.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}
// ----------------------------------------------------------------------------

// Map Props ------------------------------------------------------------------
function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state                           // Declares const state variables for props
  const { isFetching, lastUpdated, items: posts } =
    postsBySubreddit[selectedSubreddit] ||
      { isFetching: true, items: [] }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default connect(mapStateToProps) (AsyncApp)
// ----------------------------------------------------------------------------
