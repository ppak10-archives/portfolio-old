// ----------------------------------------------------------------------------
// Original Creator: React
// File Developer: Peter Pak
// Description: Container for tic tac toe game
// ----------------------------------------------------------------------------

// Module Import --------------------------------------------------------------
import React, { Component } from 'react';
// ----------------------------------------------------------------------------

// Container Import -----------------------------------------------------------
import TicTacToeBoard from './TicTacToeBoard';
// ----------------------------------------------------------------------------

// Game Container -------------------------------------------------------------
class Game extends Component {
  render() {
    return (
      <div className = "game">
        <div className = "game-board">
          <TicTacToeBoard />
        </div>
        <div className = "game-info">
          <div>{ /* status */ }</div>
          <ol>{ /* todo */ }</ol>
        </div>
      </div>
    )
  }
}
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default Game
// ----------------------------------------------------------------------------
