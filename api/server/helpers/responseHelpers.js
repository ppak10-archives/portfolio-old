/**
 * responseHelper.js
 * Helper functions for handling route responses
 */

/**
 * Handle Response
 * @param {*} res
 * @param {Number} code
 * @param {String} routeStatusMessage
 */
function handleResponse(res, code, routeStatusMessage) {
  res.status(code).json({status: routeStatusMessage});
}

module.exports = {
  handleResponse,
};
