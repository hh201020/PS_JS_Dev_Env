var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');

// when signing up, it calls req.login with req.body,
// it just adds this user object to this session, and
// then Passport called its serializeUser or deserializeUser to make it work
var router = function () {
  authRouter.route('/signUp')
    .post(function (req, res) {

      console.log(req.body);
      var url = 'mongodb://localhost:27017/libraryApp';
      mongodb.connect(url, function (err, db) {
        var collection = db.collection('users');
        var user = {
          username: req.body.userName,
          password: req.body.password
        };

        collection.insert(user,
          function (err, results) {
            req.login(results.ops[0], function () {
              res.redirect('/auth/profile');
            });
          });
      });
    });

  authRouter.route('/signIn')
    .post(passport.authenticate('local', {
      failureRedirect: '/'             // if failed, go to home
    }), function (req, res) {
      res.redirect('/auth/profile');   // if success, to to profile
    });

  authRouter.route('/profile')
    .all(function (req, res, next) {
      if (!req.user) {
        res.redirect('/');
      }
      next();
    })
    .get(function (req, res) {
      res.json(req.user);                   // response just returns request body of user, which shows as json
    });

  return authRouter;
};

module.exports = router;
