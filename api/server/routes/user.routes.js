/**
 * user.routes.js
 * API routes to create, read, update, and delete user data
 */

// Node Modules
const express = require('express');

// Helpers
const authHelpers = require('../helpers/auth.helpers');
const handleRes = require('../helpers/response.helpers').handleResponse;

// Express Router
const router = express.Router();

// Database Models
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

module.exports = router;
