import {userActionsConstants} from '../constants';

export const users = (state = {}, action) => {
  switch (action.type) {
    case userActionsConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case userActionsConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userActionsConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case userActionsConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(user => {
          user.id === action.id ? {...user, deleting: true} : user
        })
      };
    case userActionsConstants.DELETE_SUCCESS:
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userActionsConstants.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user;
            return { ...userCopy, deleteError: aciton.error };
          }
          return user;
        })
      };
    default:
      return state;
  }
}