import {alertActionConstants} from '../constants';

export const alertActions = {
  success,
  error,
  clear
};

function success(message) {
  return {
    type: alertActionConstants.SUCCESS,
    message
  };
}

function error(message) {
  return {
    type: alertActionConstants.Error,
    message
  };
}

function clear() {
  return {
    type: alertActionConstants.CLEAR
  }
}