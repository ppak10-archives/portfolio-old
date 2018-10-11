// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component layout for React tic tac toe example page
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Container Import -----------------------------------------------------------
import TicTacToeGame from '../containers/TicTacToeGame';
// ----------------------------------------------------------------------------

// Tic Tac Toe Example Page ---------------------------------------------------
const TicTacToe = () => (
  <div className = "col">
    <h1>Tic Tac Toe</h1>
    <p>Basic React example adapted from
      <span>
        <a target = "_blank" rel = "noopener noreferrer"
          href = "https://reactjs.org/tutorial/tutorial.html" > tutorial
        </a>
      </span>
    </p>
    <TicTacToeGame />
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default TicTacToe;
// ----------------------------------------------------------------------------
