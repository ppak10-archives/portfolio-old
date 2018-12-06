import {userActionsConstants} from '../constants';
import {userService} from '../services';
import {alertActions} from './';

export const userActions = {
  register
}

function register(user) {
  return async (dispatch) => {
    dispatch(request(user));
    const user = await userService.register(user);
    try {
      dispatch(success());
      dispatch(alertActions.success('Registration successful'));
    } catch (err) {
      dispatch(failure(error.toString()));
      dispatch(alertActions.error(error.toString()));
    }
  }
  const request = user => {
    return {
      type: userActionsConstants.REGISTER_REQUEST,
      user
    }
  }

  const success = user => {
    return {
      type: userActionsConstants.REGISTER_SUCCESS,
      user
    }
  }

  const failure = error => {
    return {
      type: userActionsConstants.REGISTER_FAILURE,
      error
    }
  }
}