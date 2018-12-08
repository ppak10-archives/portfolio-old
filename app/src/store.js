/**
 * Redux Store
 * Configures store by attaching enhancers and reducers
 */

/**
 * Node Modules
 */

import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

/**
 * Reducer
 */

import rootReducer from './reducers';

/**
 * Compose Enhancers
 */

const reduxDevtoolsExtention = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = typeof window === 'object' && reduxDevtoolsExtention ?
reduxDevtoolsExtention({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;

/**
 * Enhancer
 */

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware),
  // other store enhancers
);

/**
 * Function to configure Redux store
 * @param  {[type]} preloadedState [description]
 * @return {[type]}                [description]
 */
export default function configureStore(preloadedState){
  return createStore(rootReducer, enhancer);
}
