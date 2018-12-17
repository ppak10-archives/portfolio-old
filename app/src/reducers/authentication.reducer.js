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
  userTokenStatus: {
    authenticating: false,
    authenticated: false,
  }
};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        loginStatus: {
          ...state.loginStatus,
          loggingIn: false,
        }
      }
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        loginStatus: {
          ...state.loginStatus,
          loggingIn: true,
        }
      }
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: {
          loggedIn: true,
          loggingIn: false,
        },
        logoutStatus: {
          ...state.logoutStatus,
          loggedOut: false,
        }
      }
    case authConstants.LOGOUT_FAILURE:
      return {
        ...state,
        logoutStatus: {
          ...state.logoutStatus,
          loggingOut: false,
        }
      }
    case authConstants.LOGOUT_REQUEST:
      return {
        ...state,
        logoutStatus: {
          ...state.logoutStatus,
          loggingOut: true,
        }
      }
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        loginStatus: {
          ...state.loginStatus,
          loggedIn: false,
        },
        logoutStatus: {
          loggedOut: true,
          loggingOut: false,
        }
      }
    case authConstants.USER_TOKEN_FAILURE:
      return {
        ...state,
        userTokenStatus: {
          ...state.userTokenStatus,
          authenticating: false,
        }
      }
    case authConstants.USER_TOKEN_REQUEST:
      return {
        ...state,
        userTokenStatus: {
          ...state.userTokenStatus,
          authenticating: true,
        }
      }
    case authConstants.USER_TOKEN_SUCCESS:
      return {
        ...state,
        userTokenStatus: {
          authenticated: true,
          authenticating: false,
        }
      }
    default:
      return state;
  }
}
