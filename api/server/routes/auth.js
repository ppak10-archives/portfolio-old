/**
 * auth.js
 * Routes for user authentication
 */

/**
 * Node Modules
 */

const express = require('express');
const jwt = require('jsonwebtoken');

/**
 * Helpers
 */

const authHelpers = require('../helpers/auth.helpers');
const handleRes = require('../helpers/response.helpers').handleResponse;

/**
 * Express Router
 */

const router = express.Router();

/**
 * Config
 */

const models = require('../models');
const User = models.user;

/**
 * Register Route
 */

router.post('/register', authHelpers.loginRedirect, async (req, res) => {
  try {
    const result = await authHelpers.createUser(req, res);
    if (result) {
      const newUser = result.dataValues;
      const token = authHelpers.generateToken(newUser);
      handleRes(res, 200, 'REGISTER_SUCCESS', newUser.username, token);
    }
  } catch (err) {
    handleRes(res, 500, 'REGISTER_SERVER_ERROR', err);
  }
});

/**
 * Login Route
 */

router.post('/login', authHelpers.loginRedirect, async (req, res) => {
  try {
    const result = await authHelpers.loginUser(req, res);
    if (result) {
      // req.session.user = result.dataValues;
      const user = result.dataValues;
      const token = authHelpers.generateToken(user);
      handleRes(res, 200, 'LOGIN_SUCCESS', user.username, token);
    }
  } catch (err) {
    handleRes(res, 500, 'LOGIN_SERVER_ERROR', err);
  }
});

/**
 * Authenticate Token Route
 */

router.get('/authenticate', (req, res, next) => {
  const token = req.body.token;
  if (!token) {
    handleRes(res, 401, 'TOKEN_REQUIRED_ERROR');
  } else {
    jwt.verify(token, 'keyboard cat', async (err, user) => {
      if (err) {
        throw err;
      } else {
        const result = await User.findOne({where: {id:user.id}});
        if (result) {
          handleRes(res, 200, 'TOKEN_AUTHENTICATION_SUCCESS', user.id, token);
        }
      }
    });
  }
});

/**
 * Logout Route
 */
router.get('/logout', authHelpers.loginRequired, (req, res) => {
  try {
    if (req.session.cookie) {
      res.clearCookie('connect.sid');
      handleRes(res, 200, 'LOGOUT_SUCCESS');
    } else {
      handleRes(res, 404, 'LOGOUT_COOKIE_ERROR');
    }
  } catch (err) {
    handleRes(res, 500, 'LOGOUT_SERVER_ERROR', err);
  }
});

module.exports = router;
