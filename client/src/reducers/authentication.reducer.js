import {userActionsConstants} from '../constants';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {loggedIn: true, user} : {};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userActionsConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userActionsConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userActionsConstants.LOGIN_FAILURE:
      return {};
    case userActionsConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
