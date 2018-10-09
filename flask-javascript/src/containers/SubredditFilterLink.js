// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Container for Redux subreddit filter link
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { connect } from 'react-redux'
// ----------------------------------------------------------------------------

// Action Import --------------------------------------------------------------
import { setSubredditVisibilityFilter } from '../actions/index'
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import Link from '../components/Link'
// ----------------------------------------------------------------------------

// Map to Props ---------------------------------------------------------------
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.subredditVisibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setSubredditVisibilityFilter(ownProps.filter))
})
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
// ----------------------------------------------------------------------------
