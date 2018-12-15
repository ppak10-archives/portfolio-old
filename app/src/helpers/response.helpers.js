/**
 * response.helpers.js
 * Helper functions to handle API response
 */

/**
 * Parse data from response
 * @param {*} response 
 */
export const handleResponse = async (response) => {
  console.log(response)
  const text = await response.text();
  const data = text && JSON.parse(text);
  if (!response.ok) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      location.reload(true);
    }

    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  return data;
}

/**
 * Wrapper function to handle token in response
 * @param {*} response 
 * @param {*} tokenName 
 */
export const handleTokenResponse = (response, tokenName) => {
  const parsedRes = handleResponse(response);
  if (parsedRes.token) {
    localStorage.setItem(tokenName, JSON.stringify(parsedRes.token));
  }
  return parsedRes;
}
