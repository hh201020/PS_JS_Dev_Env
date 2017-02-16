var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function () {
  authRouter.route('/signUp')
    .post(function (req, res) {
      console.log(req.body);
      req.login(req.body, function () {     // when signing up, it calls req.login with req.body,
        res.redirect('/auth/profile');      // it just adds this user object to this session, and
      });                                   // then Passport called its serializeUser or deserializeUser to make it work
    });

  authRouter.route('/profile')
    .get(function (req, res) {
      res.json(req.user);                   // response just returns request body of user, which shows as json
    });

  return authRouter;
};

module.exports = router;
