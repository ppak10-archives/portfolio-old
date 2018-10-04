// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Container for Redux filter link
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { connect } from 'react-redux'
// ----------------------------------------------------------------------------

// Action Import --------------------------------------------------------------
import { setVisibilityFilter } from '../actions/index.js'
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import Link from '../components/Link'
// ----------------------------------------------------------------------------

// Map to Props ---------------------------------------------------------------
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
// ----------------------------------------------------------------------------
