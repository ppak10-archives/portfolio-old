/**
 * auth.helpers.js
 * Authentication helper functions currently used with passport-local
 */

// Node Modules
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Database Models
const models = require('../models');
const User = models.user;

// Helpers
const handleRes = require('./response.helpers').handleResponse;

// Constants
const authConstants = require('../constants/auth.constants');
const USERNAME_MIN = authConstants.USERNAME_MIN;
const PASSWORD_MIN = authConstants.PASSWORD_MIN;

/**
 * Token Generator
 */

const generateToken = (user) => {
  const payload = {
    username: user.username,
    admin: user.admin,
    id: user.id,
  }

  return token = jwt.sign(payload, 'keyboard cat', {
    expiresIn: 60 * 60 * 24
  });
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
    handleRes(res, 500, 'REGISTER_SERVER_ERROR', err);
  }
}

/**
 * Login user
 * @param {*} req 
 * @param {*} res 
 */
const loginUser = async(req, res) => {
  try {
    const user = await User.findOne({where: {username: req.body.username}});
    if (!user) {
      handleRes(res, 404, 'LOGIN_USER_ERROR', req.body.username);
    } else {
      if (comparePassword(req.body.password, user.dataValues.password)) {
        return user;
      } else {
        handleRes(res, 404, 'LOGIN_PASSWORD_ERROR');
      }
    }
  } catch (err) {
    handleRes(res, 500, 'LOGIN_SERVER_ERROR', err);
  }
}

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
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
 * Require user login to perform call
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const loginRequired = (req, res, next) => {
  if (!req.session.user) {
    handleRes(res, 401, 'LOGIN_REQUIRED');
  } else {
    return next();
  }
}

/**
 * Redirect user from page if already logged in
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const loginRedirect = (req, res, next) => {
  if (req.session.user) {
    handleRes(res, 401, 'LOGIN_REDIRECT', req.session.user.username);
  } else {
    return next();
  }
}

module.exports = {
  adminRequired,
  comparePassword,
  createUser,
  generateToken,
  loginRedirect,
  loginRequired,
  loginUser,
};