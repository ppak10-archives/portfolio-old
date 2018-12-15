/**
 * user.actions.js
 */

import {userActionsConstants} from '../constants';
import {
  logout as userLogout, 
  login as userLogin,
  register as userRegister
} from '../services';
import {alertActions} from './';

export const userActions = {
  login,
  logout,
  register,
}

function logout() {
  return async (dispatch) => {
    dispatch(request());
    try {
      const response = await userlogout();
      dispatch(success(response));
      dispatch(alertActions.success(response.message));
    } catch (err) {
      dispatch(failure(err.toString()));
      dispatch(alertActions.error(err.toString()));
    }
  };

  function request() {
    return {
      type: userActionsConstants.LOGOUT_REQUEST
    }
  }

  function success(user) {
    return {
      type: userActionsConstants.LOGOUT_SUCCESS,
      user
    }
  }

  function failure(err) {
    return {
      type: userActionsConstants.LOGOUT_FAILURE,
      err
    }
  }
}

function login(username, password) {
  return async (dispatch) => {
    dispatch(request({username}));
    try {
      const response = await userLogin(username, password);
      dispatch(success(response));
      dispatch(alertActions.success(response.message));
    } catch (err) {
      dispatch(failure(err.toString()));
      dispatch(alertActions.error(err.toString()));
    }
  };

  function request(user) {
    return {
      type: userActionsConstants.LOGIN_REQUEST,
      user
    }
  }

  function success(user) {
    return {
      type: userActionsConstants.LOGIN_SUCCESS,
      user
    }
  }

  function failure(err) {
    return {
      type: userActionsConstants.LOGIN_FAILURE,
      err
    }
  }
}

function register(user) {
  
  return async (dispatch) => {
    dispatch(request(user));
    try {
      const response = await userRegister(user);
      dispatch(success());
      dispatch(alertActions.success(response.message));
    } catch (err) {
      dispatch(failure(err.toString()));
      dispatch(alertActions.error(err.toString()));
    }
  };
  function request(user) {
    return {
      type: userActionsConstants.REGISTER_REQUEST,
      user
    }
  }

  function success(user) {
    return {
      type: userActionsConstants.REGISTER_SUCCESS,
      user
    }
  }

  function failure(err) {
    return {
      type: userActionsConstants.REGISTER_FAILURE,
      err
    }
  }
}