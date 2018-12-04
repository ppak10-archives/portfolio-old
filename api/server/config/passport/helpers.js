/**
 * Node Modules
 */

const bcrypt = require('bcryptjs');

const models = require('../../models');

const User = models.user;
const USERNAME_MIN = 6;
const PASSWORD_MIN = 8;

function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

async function createUser(req, res) {
  try {
    if (req.body.username.length < USERNAME_MIN) {
      return res.status(400).json({
        status: `Username must be longer than ${USERNAME_MIN} characters`
      });
    } else if (req.body.password.length < PASSWORD_MIN) {
      return res.status(400).json({
        status: `Password must be longer than ${PASSWORD_MIN} characters`
      });
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(req.body.password, salt);
      const data = {
        username: req.body.username,
        password: hash
      }
      return await User.create(data);
    }
  } catch (err) {
    return res.status(400).json({
      status: `Error with message: ${err.message}`
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