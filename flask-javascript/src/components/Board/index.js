// ----------------------------------------------------------------------------
// Original Creator: React
// File Developer: Peter Pak
// Description: Component for tic tac toe board
// ----------------------------------------------------------------------------

// Module Import --------------------------------------------------------------
import React, { Component } from 'react';
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import Square from '../Square';
// ----------------------------------------------------------------------------

// Board Component ------------------------------------------------------------
class Board extends Component {
  renderSquare(i){
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className = "status">{ status }</div>
        <div className = "board-row">
          { this.renderSquare(0) }
          { this.renderSquare(1) }
          { this.renderSquare(2) }
        </div>
        <div className = "board-row">
          { this.renderSquare(3) }
          { this.renderSquare(4) }
          { this.renderSquare(5) }
        </div>
        <div className = "board-row">
          { this.renderSquare(6) }
          { this.renderSquare(7) }
          { this.renderSquare(8) }
        </div>
      </div>
    );
  }
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Board
// ----------------------------------------------------------------------------
