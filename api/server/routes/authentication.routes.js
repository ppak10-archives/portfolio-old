/**
 * authentication.routes.js
 * API routes for user authentication
 */

// Node Modules
const express = require('express');
const jwt = require('jsonwebtoken');

// Helpers
const authHelpers = require('../helpers/auth.helpers');
const handleRes = require('../helpers/response.helpers').handleResponse;

// Express Router
const router = express.Router();

// Database Models
const models = require('../models');
const User = models.user;

/**
 * Authenticate Token Route
 */

router.get('/authenticate', (req, res, next) => {
  const header = req.headers['authorization'];
  let token = null;
  if (typeof header !== 'undefined') {
    const bearer = header.split(' ');
    token = bearer[1];
  }
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
 * Logout Route
 */
router.get('/logout', (req, res) => {
  try {
    handleRes(res, 200, 'LOGOUT_SUCCESS');
  } catch (err) {
    handleRes(res, 500, 'LOGOUT_SERVER_ERROR', err);
  }
});

module.exports = router;
