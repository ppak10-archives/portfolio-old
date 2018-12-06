import {userActionsConstants} from '../constants';
import {userService} from '../services';
import {alertActions} from './';

export const userActions = {
  register
}

function register(user) {
  
  return (dispatch) => {
    dispatch(request(user));
    userService.register(user)
      .then(
        user => { 
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success('Registration successful'));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
    );
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

  function failure(error) {
    return {
      type: userActionsConstants.REGISTER_FAILURE,
      error
    }
  }
}