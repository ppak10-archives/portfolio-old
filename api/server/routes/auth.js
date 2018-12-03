const authController = require('../controllers/auth');

module.exports = (app, passport) => {
  app.get('/signup', authController.signup);
  app.get('/signin', authController.signin);
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup',
  }));
  app.get('/dashboard', isLoggedIn, authController.dashboard);
  app.get('/logout', authController.logout);
  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/signin',
  }));

  /**
   * Checks that user is logged in, otherwise redirects
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/signin');
  }
}