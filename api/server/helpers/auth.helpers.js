/**
 * auth.helpers.js
 * Authentication helper functions currently used with passport-local
 */

/**
 * Node Modules
 */

const bcrypt = require('bcryptjs');

/**
 * Config
 */

const models = require('../models');
const User = models.user;

/**
 * Helpers
 */

const handleRes = require('./response.helpers').handleResponse;

/**
 * Constants
 */

const authConstants = require('../constants/auth.constants');
const USERNAME_MIN = authConstants.USERNAME_MIN;
const PASSWORD_MIN = authConstants.PASSWORD_MIN;

function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

/**
 * Create New User
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async(req, res) => {
  try {
    if (req.body.username.length < USERNAME_MIN) {
      handleRes(res, 400, 'REGISTER_USERNAME_LENGTH_ERROR', USERNAME_MIN);
    } else if (req.body.password.length < PASSWORD_MIN) {
      handleRes(res, 400, 'REGISTER_PASSWORD_LENGTH_ERROR', PASSWORD_MIN);
    } else if (await User.findOne({where: {username: req.body.username}})) {
      handleRes(res, 400, 'REGISTER_USERNAME_TAKEN_ERROR', req.body.username);
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(req.body.password, salt);
      const data = {
        firstName: req.body.firstName || null,
        lastName: req.body.lastName || null,
        username: req.body.username,
        password: hash,
        admin: req.body.username === 'scottydoge'
      }
      return await User.create(data);
    }
  } catch (err) {
    handleRes(res, 500, 'REGISTER_SERVER_ERROR', err)
  }
}

function loginRequired(req, res, next) {
  if (!req.user) {
    return res.status(401).json({status: 'Please log in'});
  } else {
    return next();
  }
}

async function adminRequired(req, res, next) {
  try {
    if (!req.user) {
      return res.status(401).json({status: 'Please log in'});
    } else {
      const user = await User.findOne({where: {username:username}});
      if (!user.admin) {
        return res.status(401).json({status: 'Access Denied'});
      } else {
        return next();
      }
    }
  } catch (err) {
    return res.status(500).json({status: 'Fatal error'});
  }
}

/**
 * Redirect user from page if already logged in
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const loginRedirect = (req, res, next) => {
  if (req.user) {
    return handleRes(res, 401, 'LOGIN_REDIRECT', req.user.dataValues.username);
  } else {
    return next();
  }
}

module.exports = {
  comparePassword,
  createUser,
  loginRequired,
  adminRequired,
  loginRedirect,
};