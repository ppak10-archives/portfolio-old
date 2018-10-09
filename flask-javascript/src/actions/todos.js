// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script to hold todo list actions
// ----------------------------------------------------------------------------

// Todo List Actions ----------------------------------------------------------
let nextTodoId = 0                                                              // Todo id declaration to hold in state

export const addTodo = text => ({                                               // Add todo action with parameter of text
  type: 'ADD_TODO',                                                             // Action type reference for state change
  id: nextTodoId++,                                                             // Todo item identifier
  text                                                                          // Text parameter for added todo item
})

export const setVisibilityFilter = filter => ({                                 // Set visibility filter for todo items
  type: 'SET_VISIBILITY_FILTER',                                                // Action type reference for state change
  filter                                                                        // Filter parameter for visibility filter
})

export const toggleTodo = id => ({                                              // Toggle completion for todo item
  type: 'TOGGLE_TODO',                                                          // Action type to toggle completion state
  id                                                                            // Id parameter for toggling todo item
})

export const VisibilityFilters = {                                              // Visibility filter types for todo items
  SHOW_ALL: 'SHOW_ALL',                                                         // Show all todo items filter
  SHOW_COMPLETED: 'SHOW_COMPLETED',                                             // Show all completed todo items filter
  SHOW_ACTIVE: 'SHOW_ACTIVE'                                                    // Show all active todo items filter
}
// ----------------------------------------------------------------------------
