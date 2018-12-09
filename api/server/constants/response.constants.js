/**
 * response.constants.js
 * Constants used for responding with route status and messages
 */

exports = (module.exports = {});

exports.status = {
  REQUEST_FAILURE: "REQUEST_FAILURE",
  REQUEST_SUCCESS: "REQUEST_SUCCESS",
}

exports.message = {
  REGISTER_SUCCESS: (req) => {
    return `User account created for ${req}`;
  },
  REGISTER_FAILURE: (req) => {
    return `User account could not be created for ${req}`;
  }, 
}