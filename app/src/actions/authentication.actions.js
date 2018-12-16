/**
 * authentication.actions.js
 * Actions specific for authentication
 */

// Services
import {authenticationService as authService} from '../services';

// Constants
import {authenticationActionsConstants as authConstants} from '../constants';

/**
 * Login User Action Dispatch
 * @param {String} username 
 * @param {String} password 
 */
export const userLogin = (username, password) => {
  return async (dispatch) => {
    dispatch({type: authConstants.LOGIN_REQUEST});
    try {
      const response = await authService.login(username, password);
      dispatch({type: authConstants.LOGIN_SUCCESS});
    } catch (err) {
      dispatch({type: authConstants.LOGIN_FAILURE});
    }
  }
}

/**
 * Logout User Action Dispatch
 */
export const userLogout = () => {
  return async (dispatch) => {
    dispatch({type: authConstants.LOGOUT_REQUEST});
    try {
      const response = await authService.logout();
      dispatch({type: authConstants.LOGOUT_SUCCESS});
    } catch (err) {
      dispatch({type: authConstants.LOGOUT_FAILURE})
    }
  }
}
