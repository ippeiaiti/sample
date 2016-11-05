var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./model/user');

module.exports = (passport) => {
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log(user);
      done(err, user);
    });
  });

  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'ユーザーIDが間違っています。' });
        }
        if (user.password !== password) {
          return done(null, false, { message: 'パスワードが間違っています。' });
        }
        return done(null, user);
      });
    }
  ));
};
