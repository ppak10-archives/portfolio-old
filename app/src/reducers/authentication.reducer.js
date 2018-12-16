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
  loggedIn: false,
  loggingIn: false,
  loggedOut: true,
  loggingOut: false,
};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_USER_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    case authConstants.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        loggedOut: false,
      };
    case authConstants.LOGIN_USER_FAILURE:
      return {
        ...state,
        loggingIn: false,
      };
    case authConstants.LOGOUT_USER_REQUEST:
      return {
        ...state,
        loggingOut: true,
      };
    case authConstants.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        loggedOut: true,
        loggingOut: false,
      };
    case authConstants.LOGOUT_USER_FAILURE:
      return {
        ...state,
        loggingOut: false,
      };
    default:
      return state;
  }
}
