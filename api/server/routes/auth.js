const express = require('express');
const router = express.Router();

const authHelpers = require('../config/passport/helpers');
const localPassport = require('../config/passport/local');

router.post('/users/register', authHelpers.loginRedirect, async (req, res, next) => {
  try {
    console.log('called');
    const newUser = await authHelpers.createUser(req, res)
    localPassport.authenticate('local', (err, user, info) => {
      if (user) {
        res.status(200).json({status: 'success'});
      }
    }) (req, res, next);
    return newUser;
  } catch (err) {
    res.status(500).json({status:'error'});
  }
});

router.post ('/login', authHelpers.loginRedirect, (req, res, next) => {
  localPassport.authenticate('local',(err, user, info) => {
    if (err) {
      return res.status(500).json({status: 'error'});
    }
    if (!user) {
      return res.status(404).json({status: 'not found'});
    }
    if (user) {
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({status: 'error'});
        } else {
          return res.status(200).json({status: 'status'});
        }
      })
    }
  }) (req, res, next);
});

router.get('logout', authHelpers.loginRequired, (req, res, next) => {
  req.logout();
  return res.status(200).json({status: 'success'});
});

module.exports = router;

// const authController = require('../controllers/auth');

// module.exports = (app, passport) => {
//   app.get('/signup', authController.signup);
//   app.get('/signin', authController.signin);
//   app.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/signup',
//   }));
//   app.get('/dashboard', isLoggedIn, authController.dashboard);
//   app.get('/logout', authController.logout);
//   app.post('/signin', passport.authenticate('local-signin', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/signin',
//   }));

//   /**
//    * Checks that user is logged in, otherwise redirects
//    * @param {*} req 
//    * @param {*} res 
//    * @param {*} next 
//    */
//   function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     }
//     res.redirect('/signin');
//   }
// }