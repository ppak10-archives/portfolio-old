/**
 * authentication.service.js
 * API route calls to server for user authentication
 */

// Helpers
import {
  handleRequest as handleReq,
  handleResponse as handleRes,
} from '../helpers';

// Constants
import {API_URL} from '../constants';

/**
 * User Token Authentication Route
 * @param {*} token 
 * @param {*} tokenName 
 */
const userToken = async (tokenName) => {
  const request = handleReq('GET', null, tokenName)
  const response = await fetch(`${API_URL}/auth/token/user`, request);
  return handleRes(response, tokenName);
}

/**
 * User Login Route
 * @param {*} username 
 * @param {*} password 
 */
const login = async (username, password) => {
  const request = handleReq('POST', JSON.stringify({username, password}));
  const response = await fetch(`${API_URL}/auth/login`, request);
  return handleRes(response, 'userToken');
}

/**
 * User Logout Route
 */
const logout = async () => {
  localStorage.removeItem('userToken');
  const request = handleReq('GET', null, 'userToken');
  const response = await fetch(`${API_URL}/auth/logout`, request);
  return handleRes(response);
}

export const authenticationService = {
  login,
  logout,
  userToken,
};

async function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  const result = await fetch(`${API_URL}/users`, requestOptions);
  return handleResponse(result);
}

async function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  const result = await fetch(`${API_URL}/users/${id}`, requestOptions);
  return handleResponse(result);
}

async function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'applicaiton/json'},
    body: JSON.stringify(user)
  };

  const result = await fetch(`${API_URL}/users/${user.id}`, requestOptions);
  return handleResponse(result);
}

async function deleteUser(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  const result = await fetch(`${API_URL}/users/${id}`, requestOptions);
  return handleResponse(result);
}
