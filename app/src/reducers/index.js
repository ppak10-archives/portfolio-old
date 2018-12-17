/**
 * index.js
 * Exports reducers used with Redux through combine reducer
 */

// Node Modules
import {combineReducers} from 'redux';

// Reducers
import {authentication} from './authentication.reducer';
import {registration} from './registration.reducer';
import {user} from './user.reducer';
import {alert} from './alert.reducer';
import test from './test';

const rootReducer = combineReducers({
  authentication,
  registration,
  user,
  alert,
  test,
});

export default rootReducer;
