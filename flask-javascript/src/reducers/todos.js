// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Reducer for todos
// ----------------------------------------------------------------------------

// Todos Reducer --------------------------------------------------------------
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}
// ----------------------------------------------------------------------------

// Reducer Export -------------------------------------------------------------
export default todos
// ----------------------------------------------------------------------------
