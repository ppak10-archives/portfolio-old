/**
 * user.reducer.js
 * Reducers for user actions
 */

// Constants
import {userActionsConstants as userConstants} from '../constants';

// Initial State
const initialState = {
  details: {
    username: null,
    firstName: null,
    lastName: null,
  },
  registerStatus: {
    registered: false,
    registering: false,
  }
}

export const user = (state = initialState, action) => {
  const nextState = {...state};
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(user => {
          user.id === action.id ? {...user, deleting: true} : user
        })
      };
    case userConstants.DELETE_SUCCESS:
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
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
    case userConstants.REGISTER_REQUEST:
      nextState.registerStatus.registering = true;
      return nextState;
    case userConstants.REGISTER_SUCCESS:
      nextState.registerStatus.registered = true;
      nextState.registerStatus.registering = false;
      return nextState;
    case userConstants.REGISTER_FAILURE:
      nextState.registerStatus.registering = false;
      return nextState;
    default:
      return state;
  }
}