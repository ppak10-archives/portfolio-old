/**
 * responseHelper.js
 * Helper functions for handling route responses
 */

/**
 * Constants
 */

 const responseConstants = require('../constants/response.constants');

/**
 * Handle Response
 * @param {*} res
 * @param {Number} code
 * @param {String} status
 * @param {*} value
 */
function handleResponse(res, code, status, value) {
  switch (status) {
    case responseConstants.status.REQUEST_SUCCESS:
      res.status(code).json({
        status: status,
        message: responseConstants.message.REGISTER_SUCCESS(value),
      });
      break;
    default:
      res.status(code).json({
        status: status,
        message: request,
      });
      break;
  }
}

module.exports = {
  handleResponse,
};
