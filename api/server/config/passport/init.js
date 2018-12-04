/**
 * Node Modules
 */

const passport = require('passport');

/**
 * Model Import for Users
 */

const models = require('../../models');
const User = models.user;

/**
 * Passport Initialization
 */

module.exports = () => {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id)
      if (user) {
        done(null, user);
      } else {
        done(user.error, null);
      }
    } catch (err) {
      done(err, null);
    }
  });
}