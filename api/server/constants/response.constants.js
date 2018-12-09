/**
 * response.constants.js
 * Constants used for responding with route status and messages
 */

/**
 * Message Response Constants
 * @param {String} status
 * @param {*} value
 * @return {String} message
 */
const message = (status, value) => {
  switch (status) {
    case 'REGISTER_PASSWORD_LENGTH_ERROR':
      return `Password must be longer than ${value} characters`;
    case 'REGISTER_SERVER_ERROR':
      return `Internal server error: ${value}`;
    case 'REGISTER_SUCCESS':
      return `User account created for ${value}`;
    case 'REGISTER_USERNAME_LENGTH_ERROR':
      return `Username must be longer than ${value} characters`;
    case 'REGISTER_USERNAME_TAKEN_ERROR':
      return `Username ${value} is already in use`;
    default:
      return `Message Error`;
  }
}

module.exports = {
  message,
};
