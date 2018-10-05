// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script containing function to configure store
// ----------------------------------------------------------------------------

// Module Import --------------------------------------------------------------
import { createStore, applyMiddleware } from 'redux';
// ----------------------------------------------------------------------------

// Reducer Import -------------------------------------------------------------
import rootReducer from './reducers';
// ----------------------------------------------------------------------------

// Configure Store Function ---------------------------------------------------
function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}
// ----------------------------------------------------------------------------

// Store Export ---------------------------------------------------------------
export default configureStore;
// ----------------------------------------------------------------------------
