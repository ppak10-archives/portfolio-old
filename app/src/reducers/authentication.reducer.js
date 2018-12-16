/**
 * authentication.reducer.js
 * Reducers to hold values for user authentication
 */

// Constants
import {authenticationActionsConstants as authConstants} from '../constants';

// const user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? {loggedIn: true, user} : {};

// Initial State
const initialState = {
  loginStatus: {
    loggedIn: false,
    loggingIn: false,
  },
  logoutStatus: {
    loggedOut: true,
    loggingOut: false,
  },
};

export const authentication = (state = initialState, action) => {
  const nextState = {...state};
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      nextState.loginStatus.loggingIn = true;
      return nextState;
    case authConstants.LOGIN_SUCCESS:
      nextState.loginStatus.loggedIn = true;
      nextState.loginStatus.loggingIn = false;
      nextState.logoutStatus.loggedOut = false;
      return nextState;
    case authConstants.LOGIN_FAILURE:
      nextState.loginStatus.loggingIn = false;
      return nextState;
    case authConstants.LOGOUT_REQUEST:
      nextState.logoutStatus.loggingOut = true;
      return nextState;
    case authConstants.LOGOUT_SUCCESS:
      nextState.loginStatus.loggedIn = false;
      nextState.logoutStatus.loggedOut = true;
      nextState.logoutStatus.loggingOut = false;
      return nextState;
    case authConstants.LOGOUT_FAILURE:
      nextState.logoutStatus.loggingOut = false;
      return nextState;
    default:
      return state;
  }
}
