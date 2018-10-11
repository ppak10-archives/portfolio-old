// ----------------------------------------------------------------------------
// Original Creator: React
// File Developer: Peter Pak
// Description: Container for tic tac toe game
// ----------------------------------------------------------------------------

// Module Import --------------------------------------------------------------
import React, { Component } from 'react';                                       // Import react to use in component
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import TicTacToeBoard from '../components/TicTacToeBoard';                      // Import tic tac toe board component
// ----------------------------------------------------------------------------

// Game Container -------------------------------------------------------------
class TicTacToeGame extends Component {                                         // Container for tic tac toe game
  constructor(props){                                                           // Constructor used to iniialize state
    super(props);                                                               // Super is required in subclass
    this.state = {                                                              // Lifts state to a parent component
      history: [{                                                               // Creates a history to save previous states
        squares: Array(9).fill(null),                                           // Initial state for board array with 9 nulls
      }],
      stepNumber: 0,                                                            // Initial state value for step number key
      xIsNext: true,                                                            // State value to tell if player X is next
    }
  }

  handleClick(i){                                                               // Handles the click method passed to square
    const history = this.state.history.slice(0, this.state.stepNumber + 1);     // Retrieves specified state history
    const current = history[history.length - 1];                                // Declares current history from state list
    const squares = current.squares.slice();                                    // Declares a copy of current square array
    if (this.calculateWinner(squares) || squares[i]){                           // If winner exists or if square is filled
      return;                                                                   // Return nothing to prevent square change
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';                                // Uses the passed index to set element
    this.setState({                                                             // Resets squares array state with new state
      history: history.concat([{                                                // Records game changes to history list
        squares: squares,                                                       // Sets in newly changed squares array
      }]),
      stepNumber: history.length,                                               // Sets step number to the length of history
      xIsNext: !this.state.xIsNext,                                             // Sets turn for next player
    });
  }

  jumpTo(step){                                                                 // Jump to game step stored in history
    this.setState({                                                             // Set game state from history
      stepNumber: step,                                                         // Set game step number from input parameter
      xIsNext: (step % 2) === 0,                                                // Determine next player with modulus
    });
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
    const history = this.state.history;                                         // Retrieves state history from state
    const current = history[this.state.stepNumber];                             // Retrieves current step history from list
    const winner = this.calculateWinner(current.squares);                       // Call helper method to determine winner

    const moves = history.map((step, move) => {                                 // Maps out list of history to moves constant
      const desc = move ?                                                       // If a move exists
        'Go to move #' + move :                                                 // Set desc to move number
        'Go to game start';                                                     // Else set desc to game start
      return(                                                                   // Return list of moves
        <li key = { move }>
          <button className = "btn btn-info" onClick = {
            () => this.jumpTo(move)
          }>
            { desc }
          </button>
        </li>
      );
    });

    let status;                                                                 // Game status declaration
    if (winner) {                                                               // If the helper method returned a value
      status = 'Winner: ' + winner;                                             // Set status to winner's value
    } else {                                                                    // Else if helper method returned null
      status = 'Current Turn: ' + (this.state.xIsNext ? 'X' : 'O');             // Sets status for displaying next player
    }

    return (
      <div className = "game">
        <div className = "game-board">
          <TicTacToeBoard
            squares = { current.squares }
            onClick = { (i) => this.handleClick(i)  }
          />
        </div>
        <div className = "game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    )
  }
}
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default TicTacToeGame                                                    // Export tic tac toe game container
// ----------------------------------------------------------------------------
