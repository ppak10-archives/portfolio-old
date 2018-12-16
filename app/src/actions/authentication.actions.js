/**
 * authentication.actions.js
 * Actions specific for authentication
 */

// Services
import {
  logout as userLogout,
  login as userLogin,
  register as userRegister,
} from '../services';

// Helpers
// import { requestAction } from '../helpers';

// Constants
import {authenticationActionsConstants as authConstants} from '../constants';

/**
 * Login Action Dispatch
 * @param {String} username 
 * @param {String} password 
 */
export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({type: authConstants.LOGIN_USER_REQUEST});
    try {
      const response = await userLogin(username, password);
      dispatch({type: authConstants.LOGIN_USER_SUCCESS});
    } catch (err) {
      dispatch({type: authConstants.LOGIN_USER_FAILURE});
    }
  }
}

/**
 * Logout Action Dispatch
 */
export const logout = () => {
  return async (dispatch) => {
    dispatch({type: authConstants.LOGOUT_USER_REQUEST});
    try {
      const response = await userLogout();
      dispatch({type: authConstants.LOGOUT_USER_SUCCESS});
    } catch (err) {
      dispatch({type: authConstants.LOGOUT_USER_FAILURE})
    }
  }
}
