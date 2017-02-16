var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = function () {
    passport.use(new LocalStrategy({
            usernameField: 'userName',
            passwordField: 'password'
        },
        function (username, password, done) {
          var user = {
            username: username,
            password: password
          };
          done(null, user);
        }));
};
// local strategy does not do anything yet
// for now every user is good user, and will be authenticated
