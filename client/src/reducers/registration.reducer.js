import {userActionsConstants} from '../constants';

export const registration = (state = {}, action) => {
  switch (action.type) {
    case userActionsConstants.REGISTER_REQUEST:
      return {
        registering: true,
      };
    case userActionsConstants.REGISTER_SUCCESS:
      return {};
    case userActionsConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}