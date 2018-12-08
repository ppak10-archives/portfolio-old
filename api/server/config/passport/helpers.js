/**
 * helpers.js
 * Authentication helper functions currently used with passport-local
 */

/**
 * Node Modules
 */

const bcrypt = require('bcryptjs');

const models = require('../../models');
const User = models.user;

const authConstants = require('../../constants/auth.constants');
const USERNAME_MIN = authConstants.USERNAME_MIN;
const PASSWORD_MIN = authConstants.PASSWORD_MIN;

function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

async function createUser(req, res) {
  try {
    if (req.body.username.length < USERNAME_MIN) {
      res.status(400).json({
        message: `Username must be longer than ${USERNAME_MIN} characters`
      });
    } else if (req.body.password.length < PASSWORD_MIN) {
      res.status(400).json({
        message: `Password must be longer than ${PASSWORD_MIN} characters`
      });
    } else if (await User.findOne({where: {
      username: req.body.username
    }})) {
      res.status(400).json({
        message: `Username ${req.body.username} is already taken`
      });
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(req.body.password, salt);
      const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: hash
      }
      console.log(req.body.username)
      const newUser = await User.create(data);
    }
  } catch (err) {
    console.log(err)
    res.status(400).json({
      message: `Error with message: ${err.message}`
    });
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

function loginRedirect(req, res, next) {
  if (req.user) {
    return res.status(401).json({status: 'Already logged in'});
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