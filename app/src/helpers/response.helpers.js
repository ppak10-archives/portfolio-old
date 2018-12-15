/**
 * response.helpers.js
 * Helper functions to handle API response
 */

/**
 * Parse data from response
 * @param {*} response 
 * @param {String} tokenName
 */
export const handleResponse = async (response, tokenName) => {
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
  } else {
    if (tokenName) {
      if (data.token) {
        localStorage.setItem(tokenName, JSON.stringify(data.token));
      }
    }
    return data;
  }
}
