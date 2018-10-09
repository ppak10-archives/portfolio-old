// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Container to add todo component
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
import { connect } from 'react-redux';
// ----------------------------------------------------------------------------

// Action Import --------------------------------------------------------------
import { addTodo } from '../actions';
// ----------------------------------------------------------------------------

// Add Todo Container ---------------------------------------------------------
const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit = {e => {
        e.preventDefault()
        if (!input.value.trim()){
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref = { node => input = node } />
        <button type = "submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect() (AddTodo)
// ----------------------------------------------------------------------------
