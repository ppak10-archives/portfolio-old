import {alertActionsConstants} from '../constants';

export const alert = (state = {}, action) => {
  switch (action.type) {
    case alertActionsConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
      };
    case alertActionsConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
      };
    case alertActionsConstants.CLEAR:
      return {};
    default:
      return state;
  }
}