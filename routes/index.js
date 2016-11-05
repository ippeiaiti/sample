var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    subTitle: 'First Express Sample',
    user: req.user
  });
});

router.post('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    subTitle: 'First Express Sample',
    message: req.body.message,
    user: req.user
  });
});

router.post('/signin', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/'})
);

router.post('/signup', function(req, res, next) {
  const User = require('../model/user');
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  user.save((err) => {
    if (err) next(err);
    else res.redirect('/signin', 307);
  });
});

module.exports = router;
