/**
 * index.js
 * Export API Routes
 */

const authRoutes = require('./authentication.routes');
const userRoutes = require('./user.routes');

module.exports = {
  authRoutes,
  userRoutes,
}