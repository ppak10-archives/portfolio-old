/**
 * request.helpers.js
 * Helper functions to build API requests
 */

/**
 * Build request object for API
 * @param {String} method
 * @param {Object} body
 * @param {String} tokenName
 * @return {Object} requestOptions
 */
export const handleRequest = (method, body, tokenName) => {
  let header = {'Content-Type' : 'application/json'};
  if (tokenName) {
    const authToken = JSON.parse(localStorage.getItem(tokenName));
    if (authToken) {
      header = {'Authorization': `Bearer ${authToken}`};
    }
  }
  const requestOptions = {
    method: method,
    headers: header,
  };
  if (body) {
    requestOptions.body = body;
  }
  return requestOptions;
};
