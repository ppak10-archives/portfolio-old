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
    case 'LOGIN_PASSWORD_ERROR':
      return `Invalid password`;
    case 'LOGIN_REDIRECT':
      return `Already logged in as ${value}`;
    case 'LOGIN_REQUIRED':
      return `User login is required to perform this call`;
    case 'LOGIN_SERVER_ERROR':
      return `User login encountered internal server error: ${value}`;
    case 'LOGIN_SUCCESS':
      return `Successfully logged in as ${value}`;
    case 'LOGIN_USER_ERROR':
      return `No account with username ${value} exists`;
    case 'LOGOUT_COOKIE_ERROR':
      return `User has already been logged out`;
    case 'LOGOUT_SERVER_ERROR':
      return `User logout encountered internal server error: ${value}`;
    case 'LOGOUT_SUCCESS':
      return `User has been successfully logged out`;
    case 'REGISTER_PASSWORD_LENGTH_ERROR':
      return `Password must be longer than ${value} characters`;
    case 'REGISTER_SERVER_ERROR':
      return `User registration encountered internal server error: ${value}`;
    case 'REGISTER_SUCCESS':
      return `User account created for ${value}`;
    case 'REGISTER_USERNAME_LENGTH_ERROR':
      return `Username must be longer than ${value} characters`;
    case 'REGISTER_USERNAME_TAKEN_ERROR':
      return `Username ${value} is already in use`;
    case 'TOKEN_AUTHENTICATION_SUCCESS':
      return `Valid token authenticated for user ${value}`;
    case 'TOKEN_REQUIRED_ERROR':
      return `Token is required to authenticate route`;
    default:
      return `Message Error`;
  }
}

module.exports = {
  message,
};
