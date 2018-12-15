/**
 * authentication.service.js
 * API route calls to server for user authentication
 */

// Helpers
import {
  handleRequest as handleReq,
  handleResponse as handleRes,
} from '../helpers';

// API url
const API_URL = 'api/auth';

/**
 * Token Authentication Route
 * @param {*} token 
 * @param {*} tokenName 
 */
export const authenticateToken = async (token, tokenName) => {
  const request = handleReq('GET', null, tokenName)
  const response = await fetch(`${API_URL}/authenticate`, request);
  return handleRes(response, tokenName);
}

/**
 * User Registration Route
 * @param {*} user 
 */
export const register = async (user) => {
  const request = handleReq('POST', JSON.stringify(user));
  const response = await fetch(`${API_URL}/register`, request);
  return handleRes(response, 'userToken');
}

/**
 * User Login Route
 * @param {*} username 
 * @param {*} password 
 */
export const login = async (username, password) => {
  const request = handleReq('POST', JSON.stringify({username, password}));
  const response = await fetch(`${API_URL}/login`, request);
  return handleRes(response, 'userToken');
}

/**
 * User Logout Route
 */
export const logout = async () => {
  localStorage.removeItem('userToken');
  const request = handleReq('GET', null, 'userToken');
  const response = await fetch(`${API_URL}/logout`, request);
  return handleRes(response);
}

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
