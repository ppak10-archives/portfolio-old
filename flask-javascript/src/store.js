// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script containing function to configure store
// ----------------------------------------------------------------------------

// Module Import --------------------------------------------------------------
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// ----------------------------------------------------------------------------

// Reducer Import -------------------------------------------------------------
import rootReducer from './reducers';
// ----------------------------------------------------------------------------

// Compose Enhancers ----------------------------------------------------------
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
// ----------------------------------------------------------------------------

// Enhancer -------------------------------------------------------------------
const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware
  ),
  // other store enhancers if any
);
// ----------------------------------------------------------------------------

// Configure Store Function ---------------------------------------------------
function configureStore( preloadedState ) {
  return createStore( rootReducer, enhancer )
}
// ----------------------------------------------------------------------------

// Store Export ---------------------------------------------------------------
export default configureStore;
// ----------------------------------------------------------------------------
