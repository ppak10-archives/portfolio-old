import {alertActionsConstants} from '../constants';

export const alertActions = {
  success,
  error,
  clear
};

function success(message) {
  return {
    type: alertActionsConstants.SUCCESS,
    message
  };
}

function error(message) {
  return {
    type: alertActionsConstants.Error,
    message
  };
}

function clear() {
  return {
    type: alertActionsConstants.CLEAR
  }
}