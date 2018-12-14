/**
 * response.helpers.js
 * Helper functions for handling route responses
 */

/**
 * Constants
 */

const message = require('../constants/response.constants').message;

/**
 * Handle Response
 * @param {*} res
 * @param {Number} code
 * @param {String} status
 * @param {*} value
 */
const handleResponse = (res, code, status, value, token) => {
  if (token) {
    res.status(code).json({
      status: status,
      message: message(status, value),
      token: token,
    });
  } else {
    res.status(code).json({
      status: status,
      message: message(status, value),
    });
  }
}

module.exports = {
  handleResponse,
};
