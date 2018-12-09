/**
 * responseHelper.js
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
function handleResponse(res, code, status, value) {
  res.status(code).json({
    status: status,
    message: message(status, value),
  });
}

module.exports = {
  handleResponse,
};
