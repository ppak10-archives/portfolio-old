/**
 * user.service.js
 * API route calls to server for user actions
 */

// Helpers
import {
  handleRequest as handleReq,
  handleResponse as handleRes
} from '../helpers';

// Constants
import {API_URL} from '../constants';

/**
 * Register User Route
 * @param {Object} user 
 */
const register = async (user) => {
  const request = handleReq('POST', JSON.stringify(user));
  const response = await fetch(`${API_URL}/user/register`, request);
  return handleRes(response);
}

export const userService = {
  register,
}
