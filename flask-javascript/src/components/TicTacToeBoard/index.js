// ----------------------------------------------------------------------------
// Original Creator: React
// File Developer: Peter Pak
// Description: Component for tic tac toe board
// ----------------------------------------------------------------------------

// Module Import --------------------------------------------------------------
import React from 'react';                                                      // Import react module for component
import PropTypes from 'prop-types'                                              // Import prop types for checks
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import Square from '../TicTacToeSquare';                                        // Import tic tac toe square component
// ----------------------------------------------------------------------------

// Board Component ------------------------------------------------------------
const TicTacToeBoard = ({ squares, onClick }) => (                              // Component for tic tac toe board
  <div>
    <div className = "board-row">
      <Square value = { squares[0] } onClick = { () => onClick(0) }/>
      <Square value = { squares[1] } onClick = { () => onClick(1) }/>
      <Square value = { squares[2] } onClick = { () => onClick(2) }/>
    </div>
    <div className = "board-row">
      <Square value = { squares[3] } onClick = { () => onClick(3) }/>
      <Square value = { squares[4] } onClick = { () => onClick(4) }/>
      <Square value = { squares[5] } onClick = { () => onClick(5) }/>
    </div>
    <div className = "board-row">
      <Square value = { squares[6] } onClick = { () => onClick(6) }/>
      <Square value = { squares[7] } onClick = { () => onClick(7) }/>
      <Square value = { squares[8] } onClick = { () => onClick(8) }/>
    </div>
  </div>
)
// ----------------------------------------------------------------------------

// PropTypes ------------------------------------------------------------------
TicTacToeBoard.propTypes = {                                                    // Prop types check for board component
  squares: PropTypes.array.isRequired,                                          // Squares prop must be an array
  onClick: PropTypes.func.isRequired,                                           // On click prop must by a function type
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default TicTacToeBoard                                                   // Export tic tac toe board component
// ----------------------------------------------------------------------------
