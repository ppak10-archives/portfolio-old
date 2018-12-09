const API_URL = 'api/auth';

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: deleteUser
};

async function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  };
  console.log(API_URL);
  const result = await fetch(`${API_URL}/login`, requestOptions);
  const user = await handleResponse(result);
  if (user.token) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  return user;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
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

async function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };

  const result = await fetch(`${API_URL}/register`, requestOptions);
  console.log(result);
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

async function handleResponse(response) {
  const text = await response.text();
  const data = text && JSON.parse(text);
  if (!response.ok) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      logout();
      location.reload(true);
    }

    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  return data;
}

function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
      return { 'Authorization': 'Bearer ' + user.token };
  } else {
      return {};
  }
}