// ----------------------------------------------------------------------------
// Original Creator: React
// File Developer: Peter Pak
// Description: Container for tic tac toe board
// ----------------------------------------------------------------------------

// Module Import --------------------------------------------------------------
import React, { Component } from 'react';                                       // Import react and component for container
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import TicTacToeSquare from '../components/TicTacToeSquare';                    // Import tic tac toe square component
// ----------------------------------------------------------------------------

// Board Container ------------------------------------------------------------
class Board extends Component {                                                 // Container for tic tac toe board
  constructor(props){                                                           // Constructor used to iniialize state
    super(props);                                                               // Super is required in subclass
    this.state = {                                                              // Lifts state to a parent component
      squares: Array(9).fill(null),                                             // Initial state for board array with 9 nulls
      xIsNext: true,                                                            // State value to tell if player X is next
    }
  }

  handleClick(i){                                                               // Handles the click method passed to square
    const squares = this.state.squares.slice();                                 // Retuns a shallow copy of the square array
    if (this.calculateWinner(squares) || squares[i]){                           // If winner exists or if square is filled
      return;                                                                   // Return nothing to prevent square change
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';                                // Uses the passed index to set element
    this.setState({                                                             // Resets squares array state with new state
      squares: squares,                                                         // Takes in newly changed squares array
      xIsNext: !this.state.xIsNext,                                             // Sets turn for next player
    });
  }

  renderSquare(i){                                                              // Render method for board square
    return (                                                                    // Returns tic tac toe square
      <TicTacToeSquare
        value = { this.state.squares[i] }
        onClick = { () => this.handleClick(i) }
      />
    );                                                                          // Takes input parameter for value and click
  }

  calculateWinner(squares) {                                                    // Method to calculate game winner
    const lines = [                                                             // List of possible winning lines
      [0, 1, 2],                                                                // Top horizontal line
      [3, 4, 5],                                                                // Middle horizontal line
      [6, 7, 8],                                                                // Bottom horizontal line
      [0, 3, 6],                                                                // Left vertical line
      [1, 4, 7],                                                                // Middle vertical line
      [2, 5, 8],                                                                // Right vertical line
      [0, 4, 8],                                                                // Downslope diagonal line
      [2, 4, 6],                                                                // Upslope diagonal line
    ];
    for (let i = 0; i < lines.length; i++){                                     // For all possible winning conditions
      const [a, b, c] = lines[i];                                               // Set a, b, and c to elements in condition
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) // If the same value exists in all elements
      {                                                                         // then a winner is determined
        return squares[a];                                                      // Return winning player value
      }
    }
    return null;                                                                // Return null if no winners exist
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);                    // Call helper method to determine winner
    let status;                                                                 // Game status declaration
    if (winner) {                                                               // If the helper method returned a value
      status = 'Winner: ' + winner;                                             // Set status to winner's value
    } else {                                                                    // Else if helper method returned null
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');              // Sets status for displaying next player
    }

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

// Container Export -----------------------------------------------------------
export default Board
// ----------------------------------------------------------------------------
