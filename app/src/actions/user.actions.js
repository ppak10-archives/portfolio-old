import {userActionsConstants} from '../constants';
import {userService} from '../services';
import {alertActions} from './';

export const userActions = {
  register
}

function register(user) {
  
  return async (dispatch) => {
    dispatch(request(user));
    try {
      await userService.register(user);
      dispatch(success());
      dispatch(alertActions.success('Registration successful'));
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