// ----------------------------------------------------------------------------
// Original Creator: React
// File Developer: Peter Pak
// Description: Component for tic tac toe square
// ----------------------------------------------------------------------------

// Module Import --------------------------------------------------------------
import React from 'react'                                                       // Import react module for component
import PropTypes from 'prop-types'                                              // Import prop types for checks
// ----------------------------------------------------------------------------

// Tic Tac Toe Square Component -----------------------------------------------
const TicTacToeSquare = ({ value, onClick }) => (                               // Component for tic tac toe square
  <button className = "square btn btn-outline-secondary" onClick = {
    () => onClick()
  }>
    { value }
  </button>                                                                     // Button to hold tic tac toe square
);
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
TicTacToeSquare.propTypes = {                                                   // Prop types check for square component
  value: PropTypes.number.isRequired,                                           // Value prop must be a number type
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default TicTacToeSquare                                                  // Export square component
// ----------------------------------------------------------------------------
